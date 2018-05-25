
/**
 * 1.根据传入的router对象，动态在上面传入配置信息
 * 2.在这里我们主要是实现路由可以根据每个模块自己配置
 * 
 */

const  router = require('./user.controller');
require('./design.controller');
require('./images.controller');
require('./food.controller');

module.exports =  router;