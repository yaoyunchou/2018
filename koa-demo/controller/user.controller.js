const BasController = require('./_bas.controller');
const tokenServer = require('../services/token.service');
const {getExpiresIn} = require('../utils');
const userService = require('../services/user.service');
const uuid = require('node-uuid');
const signture = require('crypto');
const {
    SecrectKey
} = require('../config/index');

class UserController extends BasController {
    constructor(name) {
        super(name, userService);
        this.addRouter('get', '/user/list', this.handlerwarp(this.getUsers));
        this.addRouter('get', '/user', this.handlerwarp(this.getItem));
        this.addRouter('post', '/user/login', this.login.bind(this));
        this.addRouter('post', '/user/register', this.register.bind(this));

    }
    getUsers(options) {
        return this.service.getList(options);
    }
    deletUser() {

    }
    changeUser() {

    }
    /**
     * 登陆主要处理登陆问题
     * @param {obj} options 
     */
    async login(ctx, next) {
        let userInfo = await this.service.getItem({
            phone: ctx.request.body.phone
        });

        if (userInfo.isSuccess) {
            let password = signture.createHmac('sha1', SecrectKey).update(ctx.request.body.psw).digest().toString('hex');
            if (userInfo.data.psw === password) {
                let tokenInfo = await tokenServer.updateToken({
                    userId: userInfo.data._id
                });
                if (tokenInfo.isSuccess) {
                    //获取token
                    this.reply(ctx, {
                        isSuccess: true,
                        data: {
                            userId: userInfo.data._id,
                            token: tokenInfo.data.access_token
                        }
                    });
                } else {

                    /*
                     * 这里就要处理第一次登陆进来的用户了，理论上应该是第一次注册的时候就直接登陆进去创建一次token的
                     * 这里还要处理更新token
                     * 登出的时候是否处理成把时间换成现在就好了
                     */
                    let token = await tokenServer.save({
                        userId: userInfo.data._id,
                        expires_in: getExpiresIn(),
                        access_token: uuid.v1()
                    });
                    this.reply(ctx, {
                        isSuccess: true,
                        data: {
                            userId: userInfo.data._id,
                            token: token.data.access_token
                        }
                    });
                }
            } else {
                this.reply(ctx, {
                    isSuccess: false,
                    msg: '密码错误！'
                });
            }
        } else {
            this.reply(ctx, {
                isSuccess: false,
                msg: '用户名未注册！'
            });
        }

        await next();

    }

    async register(ctx, next) {
        let user = ctx.request.body;
        user = await userService.save(user);
        user.psw = signture.createHmac('sha1', SecrectKey).update(user.psw).digest().toString('hex');
        if (user.isSuccess) {
            let token = await tokenServer.save({
                userId: user.data._id,
                expires_in: getExpiresIn(),
                access_token: uuid.v1()
            });
            if (token.isSuccess) {
                this.reply(ctx, {
                    isSuccess: true,
                    data: {
                        _id: user.data._id,
                        nikeName: user.data.nikeName,
                        phone: user.data.phone,
                        token: token.data.access_token
                    },
                    msg: '创建用户,并授权成功！'
                });
            } else {
                this.reply(ctx, {
                    isSuccess: false,
                    msg: '创建用户成功，授权失败！'
                });
            }

        } else {
            this.reply(ctx, {
                isSuccess: false,
                msg: '用户名已经存在！'
            });
        }
        next();
    }
    /**
     * 登出,将token的时间换成当前时间
     * @param {Obj} options 
     */
    async logout(ctx, next) {

        let logout = await this.service.logout();
        if (logout.isSuccess) {
            this.reply(ctx, {
                isSuccess: true,
                data: '登出成功！'
            });
        } else {
            this.reply(ctx, {
                isSuccess: false,
                msg: '登出失败了！'
            });
        }

        await next();
    }
}

module.exports = new UserController('user').router;