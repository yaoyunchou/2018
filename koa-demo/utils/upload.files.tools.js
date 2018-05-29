const fs = require('fs');
const request = require('request');
const path = require('path');
const qiniu = require('qiniu');
const uuid = require('node-uuid');
const {
    bucket,
    QINIU_AccessKey,
    QINIU_SecretKey
} = require('../config');
qiniu.conf.ACCESS_KEY = QINIU_AccessKey;
qiniu.conf.SECRET_KEY = QINIU_SecretKey;
//这个是针对没有登录的用户,这里开发权限但是还是要数据入库 所以有这个东西
const imagesService = require('../services/images.service');

class UploadFiles {
    constructor(name, type = 'jpg') {
        this.name = name || 'default';
        this.type = type;
        //初始化七牛相关配置
        this.config = new qiniu.conf.Config();
        // 空间对应的机房
        this.config.zone = qiniu.zone.Zone_z0;
        // 是否使用https域名
        //config.useHttpsDomain = true;
        // 上传是否使用cdn加速
        //config.useCdnDomain = true;
        this.formUploader = new qiniu.form_up.FormUploader(this.config);
        this.putExtra = new qiniu.form_up.PutExtra();
        this.token = this.uptoken(bucket, name);
    }
    uptoken(bucket = bucket, key) {
        let mac = new qiniu.auth.digest.Mac(QINIU_AccessKey, QINIU_SecretKey);
        let putPolicy = new qiniu.rs.PutPolicy({
            scope: bucket
        });
        let uploadToken = putPolicy.uploadToken(mac);
        return uploadToken;
    }
    uploadFile(fileName, readableStream) {
        let self = this;
        return new Promise((resolve, reject) => {
            this.formUploader.putStream(self.token, fileName, readableStream, this.putExtra, function (respErr,
                respBody, respInfo) {
                if (respErr) {
                    throw respErr;
                }
                if (respInfo.statusCode == 200) {
                    imagesService.save({
                        url:respBody.key,
                        ctg:self.name
                    });
                    resolve(respBody);
                } else {
                    reject(respBody);
                }
            });
        });
    }
    deleteFile(){

    }
    createName() {
        let fileName = this.name + '/' + uuid.v1() + '.' + this.type;
    }
    getNameByUrl(url) {
        let extName = /\.\w+$/.exec(url)[0].toLowerCase();
        return this.name + '/' + uuid.v1()  + extName;
    }
    async uploadByUrl(url, domain) {
        let path = './test.gif';
        let reader = await request
            .get({
                url: url,
                headers: {
                    'Referer': domain || '',
                }
            });
        let fielName = this.getNameByUrl(url);
        return this.uploadFile(fielName, reader);
    }
    async uploadByForm(files) {

        for (let key in files) {
            const file = files[key];
            const reader = await fs.createReadStream(file.path);
            // const writer = await fs.createWriteStream(filePath);
            let fileName = name + '/' + uuid.v1() + '.' + file.name.split('.').pop();
            //let fileName = name + '/' +file.name;
            return this.uploadFile(this.token, fileName, reader);

        }
    }
}

module.exports = UploadFiles;

// function test() {
//     let qnUplaod = new UploadFiles('testUrl');
//     qnUplaod.uploadByUrl('http://i.meizitu.net/thumbs/2018/01/117406_24c17_236.jpg','http://i.meizitu.net/');
// }
// test();