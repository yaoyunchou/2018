/**
 * 用于
 */
const Service = require('./_bas.service');
const userSchema = require('../model/schemas/food.schema');

class Food extends Service {
    constructor(name, schema) {
        super(name, schema);
    }

}

const food = new Food('food', userSchema);
module.exports = food;