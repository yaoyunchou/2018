const tokenSvc = require('./services/token.service');
const userSvc = require('./services/user.service');
const content = require('./app.content');
/**
 * 检查token,如果超时就会拦截到登陆页面
 * 如果没有超时就会更新页面
 */
const filer = ['/api/user/login'];


module.exports = async (ctx, next) => {
    if (filer.indexOf(ctx.path) === -1) {
        if (!ctx.header.token) {
            /**
             * 异步不好重定向，给前端返回固定的401 前端进行捕获跳转
             */
            //ctx.response.redirect('/#/login');
            ctx.response.status = 401;
            let body = {
                data: '授权失败',
                msg: '授权失败',
                isSuccess: false
            };
            ctx.response.type = 'json';
            ctx.response.body = body;
            return;
        }
        let token = await tokenSvc.checkToken(ctx.header.token);
        if (token.isSuccess) {
            let user = await userSvc.getItem({
                _id: token.token.userId
            });
            content.setUser(user.data);
            await next();
        } else {
            ctx.response.status = 401;
            let body = {
                data: '授权失败',
                msg: '授权失败',
                isSuccess: false
            };
            ctx.response.type = 'json';
            ctx.response.body = body;
            //ctx.response.redirect('/login');
        }
    } else {
        await next();
    }
};