const BasController = require('./_bas.controller');

const designService = require('../services/design.service');

class DesignController extends BasController {
    constructor(name) {
        super(name,designService,);
        this.addRouter('get', '/design/list', this.handlerwarp(this.getList,{title:1,desc:1,author:1,smImg:1,fullImg:1,type:1}));
        this.addRouter('get', '/design', this.handlerwarp(this.getItem,{title:1,desc:1,author:1,smImg:1,fullImg:1,type:1}));
        this.addRouter('post', '/design', this.handlerwarp(this.createItem));
        this.addRouter('put', '/design', this.handlerwarp(this.updateItem));
    }

}


module.exports = new DesignController('design').router;