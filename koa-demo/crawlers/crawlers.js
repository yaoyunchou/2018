/**
 * 仅仅用于薄荷网的数据爬虫
 * 
 * 1。具有针对性  我建议这个地方的controller可以使用多态的方式去进行实现
 * 
 * 
 * 这里的功能
 * a.搜索后入库
 * b.由分类进行入库
 * c.如果匹配，则直接返回对应的数据
 */
const cheerio = require('cheerio');
const superagent = require('superagent');
const request = require('request');
const log4js = require('log4js');
require('../logger');


//测试获取的列表数据
/**
 * 通过对薄荷网的分享 这边可以从分类到各个不同的单个数据
 */

class Crawlers {
    constructor(name) {
        this.name = name;
        //配置入口路径
        this.logger = log4js.getLogger(this.name);
        this.errCount = 0;
        this.count = 0;
        this.okCount = 0;
    }
    getInfo(url) {
        let self = this;

        if (!url) {
            this.logger.error(this.name, 'url 不能为空！');
            return;
        }
        let options = {
            gzip: true,
            encoding: null,
            timeout: 20000
        };
        options.url = url;

        //在1秒钟内只发起10个请求

       
        return new Promise((resolve, reject) => {
            try {
                superagent.get(url).end(function (err, res) {
                    // 抛错拦截
                    self.count++;
                    self.logger.warn(url, self.count);
                    if (err) {
                        self.errCount++;
                        reject(err);
                        self.logger.error(url, self.errCount);
                        return;
                    }
                    let $ = cheerio.load(res.text);
                    self.okCount++;
                    self.logger.info(url, self.okCount);
                    
                    resolve({
                        dom: res.text,
                        $: $
                    });
                });
            } catch (error) {
                this.logger.error(error);
            }
            // request(options, (err, response) => {
            //     if (!err && response.statusCode === '200') {
            //         let $ = cheerio.load(response.data);
            //         resolve( { dom: response.data, $: $ });
            //     } else {
            //         reject(err);
            //     }
            // });
        });


    }
}

module.exports = Crawlers;