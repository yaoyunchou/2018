const BasController = require('./_bas.controller');
const tokenServer = require('../services/token.service');
const userService = require('../services/user.service');

class UserController extends BasController {
    constructor(name) {
        super(name,userService);
        this.addRouter('get', '/user/list', this.handlerwarp(this.getUsers));
        this.addRouter('get', '/user', this.handlerwarp(this.getItem));
        this.addRouter('post', '/user', this.handlerwarp(this.createItem));
        this.addRouter('post', '/user/login', this.login.bind(this));

    }

    createUsers() {
        return {
            name: 'yao',
            gender: 'f',
            age: 18
        };

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
        let userInfo = await this.service.getItem({phone: 18124100815});
        if (userInfo.isSuccess) {
            if (userInfo.data.psw === userInfo.data.psw) {
                let tokenInfo = await tokenServer.getToken({
                    userId: userInfo.data._id
                });
                if (tokenInfo.isSuccess) {
                    //获取token
                    this.reply(ctx, {
                        isSuccess: true,
                        data: {
                            token: tokenInfo.acces_token
                        }

                    });
                } else {

                    /*
                     * 这里就要处理第一次登陆进来的用户了，理论上应该是第一次注册的时候就直接登陆进去创建一次token的
                     * 这里还要处理更新token
                     * 登出的时候是否处理成把时间换成现在就好了
                     */
                    // return {
                    //     isSuccess: false,
                    //     msg: '获取token失败！'
                    // };

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