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
const BasCrawlers = require('./crawlers');
const foodServer = require('../services/food.service');




//测试获取的列表数据
/**
 * 通过对薄荷网的分享 这边可以从分类到各个不同的单个数据
 */

class FoodCrawlers extends BasCrawlers {
    constructor(name, url, domain) {
        super(name);
        this.url = /http:\/\//.test(url) ? url : domain + url;
        this.domain = domain;
    }
    fetch() {

    }
    async start() {
        let self = this,count=1;
        let {dom,$} = await this.getInfo(this.url);
        $('.widget-group-bar li a').each(async function(){
            count++;
            let url = $(this).attr('href');
            url = /http:\/\//.test(url)?url:self.domain+url;
            // setTimeout( async() => {
            //     console.log(url+'getCategory'+count);
            //     await self.getCategory(url);  
            // }, count*50);
            console.log(url+'getCategory'+count);
            await self.getCategory(url);  
        });
        // let url = $('.widget-group-bar li a').eq(0).attr('href');
        // url = /http:\/\//.test(url) ? url : self.domain + url;
        // await self.getCategory(url);


    }
    async getCategory(url) {
        let self = this,count = 1;
        let {dom,$} = await self.getInfo(url);
        $('.food-list li h4 a').each(async function () {
            count++;
            let  bean = {};
            bean.nikeName = $(this).text();
            let url = $(this).attr('href');
            url = /http:\/\//.test(url) ? url : self.domain + url;
            
            //console.log(bean);
            // setTimeout( async() => {
            //     await self.crawlInfo(url,bean)(bean);
            //     console.log(url+'crawlinfo'+count);
            // }, count*600);
            await self.crawlInfo(url,bean)(bean);
            console.log(url+'crawlinfo'+count);
        });

    }
    crawlInfo (infoUrl, bean) {
        let self = this;
        bean = bean||{};

        //获取name
        bean.name = infoUrl.split('/').pop();
        console.log(bean);
        return async function(item){
            let {dom,$} = await self.getInfo(infoUrl);
            item.category = parseInt($('.widget-food-detail .basic-infor a').attr('href').split('/').pop());
            console.log(item);
        };
       
    }
}

let footCrawlers = new FoodCrawlers('food', '/food/group/1', 'http://www.boohee.com');



footCrawlers.start();