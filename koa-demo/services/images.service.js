/**
 * 用于
 */
const Service = require('./_bas.service');
const imagesSchema = require('../model/schemas/images.schema');

class ImagesSvc extends Service {
    constructor(name, schema) {
        super(name, schema);
    }

}

const imagesSvc = new ImagesSvc('Images', imagesSchema);
module.exports = imagesSvc;