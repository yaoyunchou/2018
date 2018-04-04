var Hexo = require('hexo');
var hexo = new Hexo(process.cwd(), {});

hexo.init().then(function(){
  // ...
});

module.exports = async function hexoControler(ctx,next){
    let info = await hexo.route.list();
    let posts = await hexo.locals.get('posts')

    if(info){
        console.log(info);
        console.log(posts);
        console.log('hexo init ok')
    }
  
    ctx.response.body = 'Hello World';
    await next();
};