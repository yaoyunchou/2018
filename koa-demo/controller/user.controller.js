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
    async login(options) {
        let userInfo = await this.service.getItem({
            nikeName: options.nikeName
        });
        if (userInfo.isSuccess) {
            if (userInfo.data.psw === options.psw) {
                let tokenInfo = await this.service.getToken();
                if(tokenInfo.isSuccess){
                    //
                }else{
                    //
                }

            } else {
                return {
                    isSuccess:false,
                    msg:'密码错误！'
                };
            }
        } else {
            return {
                isSuccess:false,
                msg:'用户名未注册！'
            };
        }
    }

}

module.exports = new UserController('user', userService).router;