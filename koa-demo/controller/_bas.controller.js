/**
 * controller
 */
const Router = require('koa-router');
const router = new Router({
    prefix: '/api'
});
const log4js = require('log4js');

/**
 * 
 */
class BasController {
    constructor(name, service) {
        this.service = service;
        this.name = name;
        this.router = router;
        this.logger = log4js.getLogger(this.name);
        //默认几个方法crud


    }
    addRouter(method, url, handler) {
        try {
            this.router[method](url, handler);
            this.logger.info(method, this.name, 'api' + url);
        } catch (error) {
            this.logger.error(this.name, error.message);
        }

    }
    /**
     * 
     * @param {Fun} handler 
     * @param {String} msg 
     * @param {Boolean} isAsync 
     */
    handlerwarp(handler, select, msg, isAsync = true) {
        handler.bind(this);
        let backData;
        try {
            if (isAsync) {
                return async (ctx, next) => {
                    let backData = await handler.call(this, ctx, select);

                    if (backData.isSuccess) {
                        backData.msg = msg || '获取数据成功!';
                        this.reply(ctx, backData);
                    } else if (backData.err.code === 11000) {

                        this.reply(ctx, {
                            isSuccess: false,
                            msg: '信息已被使用'
                        }, 500);
                    } else {

                        this.reply(ctx, {
                            isSuccess: false,
                            msg: backData.msg || '接口出错了!'
                        }, 500);
                    }
                    await next();
                };
            } else {
                backData = handler.apply(this, arguments);
                return (ctx) => {
                    this.reply(ctx, backData);
                };
            }

        } catch (error) {
            this.logger.error(this.name, error.message);
            return (ctx) => {
                this.reply(ctx, {
                    msg: error,
                    isSuccess: false
                }, 'html', 500);
            };
        }
    }
    reply(ctx, body, type = 'json', status = 200) {
        ctx.response.status = status;
        body = body || {
            data: '',
            msg: '',
            isSuccess: true
        };

        ctx.response.type = type;
        ctx.response.body = body;
    }
    /**
     * 默认的常用方法crud
     */
    createItem(options) {
        const data = options.request.body;
        return this.service.save(data);
    }
    /**
     * 默认的常用方法crud
     */
    getItem(options, select = {}) {
        return this.service.getItem({
            _id: options.query.id
        }, select);
    }
    updateItem(options) {
        const data = options.request.body;
        data._id = data.id || '';
        return this.service.updateItem(data);
    }
    // getItem(options) {
    //     return this.service.getItem({_id:options.query.id}, {
    //         title: 1,
    //         desc: 1,
    //         author: 1,
    //         smImg: 1,
    //         fullimg: 1,
    //         smImg: 1,
    //     });
    // }
    /**
     * 获取列表
     */
    getList(ctx, select) {
        let searchOptions = {};
        searchOptions.query = {};
        for (let item in ctx.query){
            if (item == 'pageSize'||item == 'pageNum') {
                searchOptions[item] = parseInt(ctx.query[item]);
              
            }else{
                searchOptions.query[item] = {$regex:ctx.query[item]};
            }
        
        }
      
        return this.service.getList(searchOptions, select);
    }

}
module.exports = BasController;