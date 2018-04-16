const {
    QINIU_AccessKey,
    QINIU_SecretKey
} = require('../../config');
const qiniu = require('qiniu');



var mac = new qiniu.auth.digest.Mac(QINIU_AccessKey, QINIU_SecretKey);
var config = new qiniu.conf.Config();
//config.useHttpsDomain = true;
config.zone = qiniu.zone.Zone_z0;
var bucketManager = new qiniu.rs.BucketManager(mac, config);


let bucket = 'xfysj';

var statOperations = [
    qiniu.rs.statOp(bucket, 'hc/'),
 
];


bucketManager.batch(statOperations, function (err, respBody, respInfo) {
    if (err) {
        console.log(err);
        //throw err;
    } else {
        // 200 is success, 298 is part success
        if (parseInt(respInfo.statusCode / 100) == 2) {
            respBody.forEach(function (item) {
                if (item.code == 200) {
                    console.log(item.data.fsize + '\t' + item.data.hash + '\t' +
                        item.data.mimeType + '\t' + item.data.putTime + '\t' +
                        item.data.type);
                } else {
                    console.log(item.code + '\t' + item.data.error);
                }
            });
        } else {
            console.log(respInfo.statusCode);
            console.log(respBody);
        }
    }
});