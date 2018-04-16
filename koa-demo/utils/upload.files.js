const fs = require('fs');
const path = require('path');
const qiniu = require('qiniu');
const uuid = require('node-uuid');
const {
    QINIU_AccessKey,
    QINIU_SecretKey
} = require('../config');
qiniu.conf.ACCESS_KEY = QINIU_AccessKey;
qiniu.conf.SECRET_KEY = QINIU_SecretKey;
//这个是针对没有登录的用户,这里开发权限但是还是要数据入库 所以有这个东西
const imagesService = require('../services/images.service');

module.exports = async function (ctx, next) {
    this.req = ctx.req, this.res = ctx.res;
    //构建上传策略函数
    function uptoken(bucket, key) {
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
        // 是否使用https域名
        //config.useHttpsDomain = true;
        // 上传是否使用cdn加速
        //config.useCdnDomain = true;
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
                    console.log(respInfo.statusCode);
                    reject(respBody);
                }
            });
        });


    }
    if (ctx.request.path === '/api/upload/file') {

        //要上传的空间
        let bucket = 'xfysj';
        //上传到七牛后保存的文件名
        let name = ctx.query.lib || 'test/';
        //生成上传 Token
        let token = uptoken(bucket, name);
        //要上传文件的本地路径
        let filePath = './logo.png';
        //调用uploadFile上传


        const tmpdir = __dirname;
        const filePaths = [];
        const files = ctx.request.body.files || {};

        for (let key in files) {
            const file = files[key];
            const filePath = path.join(tmpdir, file.name);
            const reader = await fs.createReadStream(file.path);
            // const writer = await fs.createWriteStream(filePath);
            let fileName = name + '/' + uuid.v1() + '.' + file.name.split('.').pop();
            await uploadFile(token, fileName, reader).then(function (data) {
                ctx.response.body = data;
                imagesService.save(data);
            });
         
        }
    }
    await next();
};