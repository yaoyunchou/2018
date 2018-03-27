

const tokenSvc = reuqire('./services/token.service')
const content = reuqire('./app.content')
/**
 * 检查token,如果超时就会拦截到登陆页面
 * 如果没有超时就会更新页面
 */
export default async (ctx, next) {
    console.log(ctx);
    if (1) {
        await next();
    }
    let token = tokenSvc.checkToken(id);
    if(token.isSuccess){
        let user = userSvc.getItem({_id:token.userId});
        content.setUser(user);
        await next()
    }else{
        ctx.response.redirect('/');
    }
    

};