/**
 * 用于
 */
const Service = require('./_bas.service');
const userSchema = require('../model/schemas/food.schema');
const footCrawlers = require('../crawlers/foot.boohee');


class Food extends Service {
    constructor(name, schema) {
        super(name, schema);
    }
    getBoheData(){
        footCrawlers.start(this);
        return {
            isSuccess: true,
            data: '获取数据成功'
        };
    }
}

const food = new Food('food', userSchema);
module.exports = food;