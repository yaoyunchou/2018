/**
 * 针对图片上传,这个是有权限控制的!!
 */
const fs = require('fs');
const qiniu = require('qiniu');
const uuid = require('node-uuid');
const {
    QINIU_AccessKey,
    QINIU_SecretKey
} = require('../config');
qiniu.conf.ACCESS_KEY = QINIU_AccessKey;
qiniu.conf.SECRET_KEY = QINIU_SecretKey;


const BasController = require('./_bas.controller');

const imagesService = require('../services/images.service');

class ImagesController extends BasController {
    constructor(name) {
        super(name, imagesService, );
        this.addRouter('get', '/images', this.handlerwarp(this.getList));
        // this.addRouter('get', '/design', this.handlerwarp(this.getItem,{title:1,desc:1,author:1,smImg:1,fullImg:1,type:1}));
        this.addRouter('post', '/upload/image', this.handlerwarp(this.createItem));
        // this.addRouter('put', '/design', this.handlerwarp(this.updateItem));
    }
    async createItem(ctx, next) {
        let self = this;

        function uptoken(bucket) {
            let mac = new qiniu.auth.digest.Mac(QINIU_AccessKey, QINIU_SecretKey);
            var putPolicy = new qiniu.rs.PutPolicy({
                scope: bucket
            });
            var uploadToken = putPolicy.uploadToken(mac);
            return uploadToken;
        }
        //构造上传函数
        function uploadFile(uptoken, key, readableStream) {
            var config = new qiniu.conf.Config();
            // 空间对应的机房
            config.zone = qiniu.zone.Zone_z0;
            var formUploader = new qiniu.form_up.FormUploader(config);
            var putExtra = new qiniu.form_up.PutExtra();

            return new Promise((resolve, reject) => {
                formUploader.putStream(uptoken, key, readableStream, putExtra, function (respErr,
                    respBody, respInfo) {
                    if (respErr) {
                        throw respErr;
                    }
                    if (respInfo.statusCode == 200) {
                        resolve(respBody);
                    } else {
                        //console.log(respInfo.statusCode);
                        reject(respBody);
                    }
                });
            });
        }

        //要上传的空间名称
        let bucket = 'xfysj';
        //上传到七牛后保存的文件名
        let name = ctx.query.lib || 'test/';
        //生成上传 Token
        let token = uptoken(bucket, name);
        const files = ctx.request.body.files || {};
        let backdatas = [],
            isSuccess = true;
        for (let key in files) {
            const file = files[key];
            const reader = await fs.createReadStream(file.path);
            let fileName = name + '/' + uuid.v1() + '.' + file.name.split('.').pop();
            let backdata = await uploadFile(token, fileName, reader);
            let svcBack = await self.service.save({
                url: backdata.key,
                owner: self.service.content.getUserId()
            });
            isSuccess = isSuccess && svcBack.isSuccess;
            backdatas.push(svcBack);

        }
        if (isSuccess) {
            return {
                isSuccess: isSuccess,
                data: backdatas,
                msg:'上传成功!'
            };
        } else {
            return {
                isSuccess: isSuccess,
                msg:'上传失败'
            };
        }

    }

}

module.exports = new ImagesController('images').router;