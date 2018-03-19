const BasController = require('./_bas.controller');
const userService = require('../services/user.service');

class UserController extends BasController {
    constructor(name, service) {
        super(name, service);
        this.addRouter('get', '/list', this.handlerwarp(this.getUsers));
        this.addRouter('get', '/user/:id', this.handlerwarp(this.getItem));
        this.addRouter('post', '/user', this.handlerwarp(this.createItem));
        this.addRouter('post', '/login', this.login);

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
    login(options) {
        return async () => {
            let userInfo = await this.service.getItem({
                nikeName: options.nikeName
            });
            if (userInfo.isSuccess) {
                if (userInfo.data.psw === options.psw) {
                    let tokenInfo = await this.service.getToken({
                        userId: userInfo.data.id
                    });
                    if (tokenInfo.isSuccess) {
                        //获取token
                        return {
                            isSuccess: true,
                            data: {
                                token: tokenInfo.data.id
                            }

                        };
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
                    return {
                        isSuccess: false,
                        msg: '密码错误！'
                    };
                }
            } else {
                return {
                    isSuccess: false,
                    msg: '用户名未注册！'
                };
            }
        };

    }
    /**
     * 
     * @param {Obj} options 
     */
    logout(options) {

        return  async ()=>{
            let logout = await this.service.logout();
            if(logout.isSuccess){
                return {
                    isSuccess:true,
                    data:'登出成功！'
                };
            }else{
                return {
                    isSuccess:false,
                    msg:'登出失败了！'
                };
            }
        };
    }

}

module.exports = new UserController('user', userService).router;