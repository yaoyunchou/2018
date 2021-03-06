/**
 * 这个demo可以帮助我很好的理解koa的运行机制
 * a.关键点是中间件是“先进后出”这个就是堆栈的特点，所以多个中间件形成了一个堆栈结构！
 * b.1.最外层的中间件首先执行。
 *   2.调用next函数，把执行权交给下一个中间件。
 *   3....
 *   4.最内层的中间件最后执行。
 *   5.执行结束后，把执行权交回上一层的中间件。
 *   6. ...
 *   7.最外层的中间件收回执行权之后，执行next函数后面的代码
 * c.我们在不存在异步和i/o操作的时候理解原理，
 *   然后自然可以过度到把异步的代码转成同步的进行逻辑功能的开发！
 */

const Koa =  require('koa') ;


const app = new Koa();
let main = ctx =>{
    console.log('main');
    ctx.response.body = 'hello world!';
}
const one = (ctx, next) => {
    console.log('>> one');
    next();
    console.log('<< one');
  }
  
  const two = (ctx, next) => {
    console.log('>> two');
    next(); 
    console.log('<< two');
  }
  
  const three = (ctx, next) => {
    console.log('>> three');
    next();
    console.log('<< three');
  }
  
  app.use(one);
  app.use(two);
  app.use(three);
 app.use(main);
app.listen(4000);
console.info('http://localhost:4000');
console.log('listening------'+(process.env.PORT||4000));