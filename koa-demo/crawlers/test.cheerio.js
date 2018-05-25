const cheerio = require('cheerio');
const http = require('http');
const superagent = require('superagent');
require('./model');
//测试获取的列表数据
class Crawlers {
    constructor() {

    }
    getDetail() {
        try {
            let url = encodeURI('/food/search?keyword=鸡蛋');
            superagent.get('http://www.boohee.com/food/search?keyword=%E5%9C%9F%E8%B1%86').end(function (err, res) {
                // 抛错拦截
                if (err) {
                    throw Error(err);
                }
                let _$ = cheerio.load(res.text);
            });
        } catch (error) {
            console.log(error);
        }

    }
    getHttpDetail() {
        http.get();
    }
}


const crawlers = new Crawlers();

crawlers.getDetail();