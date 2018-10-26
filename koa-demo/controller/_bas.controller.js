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
     * @param {Fun} handler  包裹controller 对结果进行处理
     * @param {Boolean} isAuth 方法是否需要授权
     * @param {String} msg   自定义错误提示
     * @param {Boolean} isAsync  是否是异步方法
     */
    handlerwarp(handler, select, isAuth = false, msg, isAsync = true) {
        handler.bind(this);
        let backData,self = this;
        try {
            if (isAsync) {
                return async (ctx, next) => {
                    let backData = await handler.call(self, ctx, select);
                    ctx.authenticate(async function (err, user) {
                        if (!err|| !isAuth) {
                            if (backData.isSuccess) {
                                backData.msg = msg || '获取数据成功!';
                                self.reply(ctx, backData);
                            } else if (backData.err.code === 11000) {
        
                                self.reply(ctx, {
                                    isSuccess: false,
                                    msg: '信息已被使用'
                                }, 500);
                            } else {
                                self.reply(ctx, {
                                    isSuccess: false,
                                    msg: backData.msg || '接口出错了!'
                                }, 500);
                            }
                        } else {
                            self.reply(ctx, {
                                isSuccess: false,
                                msg: '授权失败!'
                            }, 'json', 401);
                        }
                    });
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
        for (let item in ctx.query) {
            if (item == 'pageSize' || item == 'pageNum' || searchOptions.query[item] instanceof Number) {
                searchOptions[item] = parseInt(ctx.query[item]);

            } else {
                searchOptions.query[item] = {
                    $regex: ctx.query[item]
                };
            }
        }
        return this.service.getList(searchOptions, select);
    }

}
module.exports = BasController;