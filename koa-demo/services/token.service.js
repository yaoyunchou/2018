/**
 * 用于处理无状态的
 */
const Service = require('./_bas.service');

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
            let tokenInfo = await this.DbModal.findOneAndUpdate(options, {acces_token:Date.now()+7200});
            return {
                isSuccess:true,
                acces_token:tokenInfo._id
            };
        } catch (error) {
            this.logger.error('token','未找到token,重新生成token!');
            if(options.userId){
                let tokenInfo = await this.save({userId:options.userId,expires_in:Date.now()+7200});
                return {
                    isSuccess:true,
                    acces_token:tokenInfo.data._id
                };
            }else{
                this.thorwError(error);
            }
        }
    }
    /**
     * 检查token,如果超时就会拦截到登陆页面
     * 如果没有超时就会更新页面
     */
    async checkToken(id){
        try {
            let tokenInfo = this.acces_token.findById(id);
            if(tokenInfo.expires_in<Date.now()){
                return {
                    isSuccess:false,
                    msg:'登陆超时,请重新登陆!'
                };
            }else{
                tokenInfo = this.DbModal.findByIdAndUpdate(id,{expires_in:Date.now()+7200});
                return {
                    isSuccess:true,
                    acces_token:tokenInfo._id,
                    msg:'更新Token成功!'
                };
            }
        } catch (error) {
            this.thorwError(error);
        }
      
    }


    /**
     * 更新token 好像没什么用
    */
    async updateToken(options){
        try {
            let tokenInfo = await this.DbModal.findByIdAndUpdate(options,{userId:1,acces_token:1});
            return {
                isSuccess:true,
                acces_token:tokenInfo.acces_token,
                msg:'更新token成功!'
            };
        } catch (error) {
            this.thorwError(error);
        }
    }
}

const user = new Token('Token', tokenSchema);
module.exports = user;