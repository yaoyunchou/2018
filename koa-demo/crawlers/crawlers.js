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
        this.runArr = [];
        this.waitArr = [];
    }
    send() {
        var self = this;
        return function (url, resolve, reject) {
            try {
                superagent.get(url).end(function (err, res) {
                    //释放位置
                    setTimeout(() => {
                        for (let i = 0; i < self.runArr.length; i++) {
                            if (self.runArr[i].url === url) {
                                let goRunItem = self.waitArr.length && self.waitArr.shift();
                                if (goRunItem) {
                                    self.runArr.splice(i, 1, goRunItem);
                                    goRunItem.callback.apply(self, goRunItem.argu);
                                } else {
                                    self.runArr.splice(i, 1);
                                }
                            }
                        }
                    }, 150);
                    // 抛错拦截
                    self.count++;
                    self.logger.info(url, self.count);
                    if (err) {
                        self.errCount++;
                        reject(err);
                        self.logger.error(url, self.errCount);
                        return;
                    }
                    let $ = cheerio.load(res.text);
                    resolve({
                        dom: res.text,
                        $: $
                    });
                });
            } catch (error) {
                this.logger.error(error);
            }
        };
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
        return new Promise((resolve, reject) => {
            //控制并发数为4 
            if (self.runArr.length <= 4) {
                self.runArr.push({
                    url: url,
                    callback: self.send(),
                    argu: [url, resolve, reject],
                    isRun: true
                });
                self.send()(url, resolve, reject);
            } else {
                self.waitArr.push({
                    url: url,
                    callback: self.send(),
                    argu: [url, resolve, reject]
                });
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