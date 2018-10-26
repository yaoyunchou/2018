const tokenSvc = require('./services/token.service');
const userSvc = require('./services/user.service');
const log4js = require('log4js');
/**
 * 检查token,如果超时就会拦截到登陆页面
 * 如果没有超时就会更新页面
 * 1.提供两个方法   一个是授权后返回对应的user和err的
 * 2. 另一个是返回boolean类型的  
 */

class AuthByToken {
    constructor(ctx, access_token) {
        this.ctx = ctx;
        this.access_token = access_token;
        this.user = {};
        this.logger = log4js.getLogger('authToken');
    }
    // 做对应的验证
    init() {

    }
    async checkToken() {
        if (!this.ctx.header.token||this.ctx.header.token=='undefined') {
            this.ctx.authenticate = (callback) => {
                this.err = true;
                callback(this.err, {});
            };
            this.ctx.isAuthed = function () {
                this.ctx.response.status = 401;
                let body = {
                    data: '授权失败',
                    msg: '授权失败',
                    isSuccess: false
                };
                this.ctx.response.type = 'json';
                this.ctx.response.body = body;
                return false;
            };
            return;
        }

        this.token = await tokenSvc.getToken({
            access_token: this.access_token
        });
        if (this.token.isSuccess) {
            if (this.token.data.expires_in > Date.now()) {
                try {
                    this.user = await userSvc.getItem({
                        _id: this.token.data.userId
                    });
                    this.ctx.authenticate = (callback) => {
                        if (this.user.isSuccess) {
                            this.err = null;
                        } else {
                            this.err = this.user.data;
                        }
                        callback(this.err, this.user.data);
                    };
                    /**
                     * 
                     */
                    this.ctx.isAuthed = function () {
                        return true;
                    };
                } catch (error) {
                    this.ctx.authenticate = (callback) => {
                        this.err = this.user;
                        callback(this.err, this.user.data);
                    };
                    this.ctx.isAuthed = function () {
                        this.ctx.response.status = 401;
                        let body = {
                            msg: '用户权限不够！',
                            isSuccess: false
                        };
                        this.ctx.response.type = 'json';
                        this.ctx.response.body = body;
                        return false;
                    };

                }
            }else{
                this.ctx.authenticate = (callback) => {
                    this.err = this.token;
                    callback(this.err, this.user.data);
                };
                this.ctx.isAuthed = function () {
                    this.ctx.response.status = 401;
                    let body = {
                        msg: 'token超时！',
                        isSuccess: false
                    };
                    this.ctx.response.type = 'json';
                    this.ctx.response.body = body;
                    return false;
                };
            }
        } else {
           
            this.ctx.authenticate = (callback) => {
                this.err = this.token;
                callback(this.err, this.user.data);
            };
            this.ctx.isAuthed = function () {
                this.ctx.response.status = 401;
                let body = {
                    msg: 'token 不存在！',
                    isSuccess: false
                };
                this.ctx.response.type = 'json';
                this.ctx.response.body = body;
                return false;
            };
        }
       
    }
}

/**
 * 
 */

module.exports = async (ctx, next) => {
    // if (!ctx.header.token) {
    //     /**
    //      * 异步不好重定向，给前端返回固定的401 前端进行捕获跳转
    //      */
    //     //ctx.response.redirect('/#/login');
    //     ctx.response.status = 401;
    //     let body = {
    //         data: '授权失败',
    //         msg: '授权失败',
    //         isSuccess: false
    //     };
    //     ctx.response.type = 'json';
    //     ctx.response.body = body;
    //     return;
    // }


    let auth = new AuthByToken(ctx, ctx.header.token);
    await auth.checkToken();
    await next();

};