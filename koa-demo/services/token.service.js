/**
 * 用于处理无状态的
 */
const Service = require('./_bas.service');
const userServer = require('user.service');
const tokenSchema = require('../model/schemas/token.schema');

class Token extends Service {
    constructor(name, schema) {
        super(name, schema);
    }
    fetchToken() {

    }
    async getToken(options) {
        let tokenInfo = await this.DbModal.find(options, {
            userId: 1,
            acces_token: 1
        });
        let userInfo =  userServer.getItem(tokenInfo.userId);
        return {
            ...userInfo,acces_token:tokenInfo.acces_token
        };
    }
}

const user = new Token('Token', tokenSchema);
module.exports = user;