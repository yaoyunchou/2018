/**
 * 用于处理无状态的
 */
const Service = require('./_bas.service');
const {getExpiresIn} = require('../utils');
 
const tokenSchema = require('../model/schemas/token.schema');

class Token extends Service {
    constructor(name, schema) {
        super(name, schema);
    }
    /**
     * 这里支持id或者userId进行查询
     * @param {Obj} options 
     */
    async getToken(options) {
        try {
            let tokenInfo = await this.DbModal.findOne(options);
            return {
                isSuccess: true,
                data:{
                    expires_in:tokenInfo.expires_in,
                    _id:tokenInfo._id,
                    userId:tokenInfo.userId,
                    access_token: tokenInfo.access_token
                }
                
            };
        } catch (error) {
            this.logger.error('token', '未找到token!');
            return this.thorwError(error);
        }
    }
    /**
     * 更新token
     */
    async updateToken(options) {
        try {
            let tokenInfo = await this.DbModal.findOneAndUpdate(options, { $set: { expires_in: getExpiresIn()}},{
                userId: 1,
                acces_token: 1
            });
            return {
                isSuccess: true,
                data:{
                    expires_in:tokenInfo.expires_in,
                    _id:tokenInfo._id,
                    userId:tokenInfo.userId,
                    access_token: tokenInfo.access_token
                },
                msg: '更新token成功!'
            };
        } catch (error) {
            this.logger.error('token','更新token失败');
            this.thorwError(error);
        }
    }
}

const tokensvc = new Token('Token', tokenSchema);
module.exports = tokensvc;