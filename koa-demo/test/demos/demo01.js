const SecrectKey = 'yaoyunchou';
const Signture = require('crypto')
    .createHmac('sha1', SecrectKey)
    .update('yao625625')
    .digest()
    .toString('hex');


console.log(Signture);