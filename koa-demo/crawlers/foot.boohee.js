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
//const foodServer = require('../services/food.service');


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
    async start(server) {
        this.server = server;
        let self = this,count=1;
        let {dom,$} = await this.getInfo(this.url);
        $('.widget-group-bar li a').each(async function(){
            count++;
            let url = $(this).attr('href');
            url = /http:\/\//.test(url)?url:self.domain+url;
            await self.getCategory(url);  
        });
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
            await self.crawlInfo(url,bean)(bean);
        });

    }
    async saveImage(url){
        //保存图片
    }
    crawlInfo (infoUrl, bean) {
        let self = this;
        bean = bean||{};

        //获取name
        bean.name = infoUrl.split('/').pop();
        return async function(item){
            let {dom,$} = await self.getInfo(infoUrl);
            item.category = parseInt($('.widget-food-detail .basic-infor a').attr('href').split('/').pop());
            item.desc = $('.widget-food-detail .content p').eq(0).text().replace('评价：','').trim();
            item.calory = $('.widget-food-detail .nutr-tag dl .dd').eq(3).text()||'';
            item.fat = $('.widget-food-detail .nutr-tag dl .dd').eq(4).text()||'';
            item.protein =  $('.widget-food-detail .nutr-tag dl .dd').eq(5).text()||'';
            item.cellulose  = $('.widget-food-detail .nutr-tag dl .dd').eq(6).text()||'';
            item.vitamin_A =  $('.widget-food-detail .nutr-tag dl .dd').eq(7).text()||'';
            item.vitamin_B = $('.widget-food-detail .nutr-tag dl .dd').eq(8).text()||'';
            item.vitamin_C =   $('.widget-food-detail .nutr-tag dl .dd').eq(9).text()||'';
            item.vitamin_D =   $('.widget-food-detail .nutr-tag dl .dd').eq(10).text()||'';
            item.vitamin_E =   $('.widget-food-detail .nutr-tag dl .dd').eq(11).text()||'';
            item.carotene =   $('.widget-food-detail .nutr-tag dl .dd').eq(12).text()||'';
            item.thiamine =   $('.widget-food-detail .nutr-tag dl .dd').eq(13).text()||'';
            item.riboflavin =  $('.widget-food-detail .nutr-tag dl .dd').eq(14).text()||'';
            item.niacin =  $('.widget-food-detail .nutr-tag dl .dd').eq(15).text()||'';
            item.cholesterol =  $('.widget-food-detail .nutr-tag dl .dd').eq(16).text()||'';
            item.magnesium =  $('.widget-food-detail .nutr-tag dl .dd').eq(17).text()||'';
            item.calcium =  $('.widget-food-detail .nutr-tag dl .dd').eq(18).text()||'';
            item.iron =  $('.widget-food-detail .nutr-tag dl .dd').eq(19).text()||'';
            item.zinc =  $('.widget-food-detail .nutr-tag dl .dd').eq(20).text()||'';
            item.copper =  $('.widget-food-detail .nutr-tag dl .dd').eq(21).text()||'';
            item.manganese =  $('.widget-food-detail .nutr-tag dl .dd').eq(22).text()||'';
            item.potassium =  $('.widget-food-detail .nutr-tag dl .dd').eq(23).text()||'';
            item.phosphorus =  $('.widget-food-detail .nutr-tag dl .dd').eq(24).text()||'';
            item.sodium =  $('.widget-food-detail .nutr-tag dl .dd').eq(25).text()||'';
            item.selenium =  $('.widget-food-detail .nutr-tag dl .dd').eq(26).text()||'';
            
            let backData = self.server.save(item);
        };
       
    }
}

let footCrawlers = new FoodCrawlers('food', '/food/group/1', 'http://www.boohee.com');



module.exports =  footCrawlers; 