/**
 * 用于
 */
const Service = require('./_bas.service');
const designSchema = require('../model/schemas/design.schema');

class DesignSvc extends Service {
    constructor(name, schema) {
        super(name, schema);
    }

}

const desingSvc = new DesignSvc('Design', designSchema);
module.exports = desingSvc;