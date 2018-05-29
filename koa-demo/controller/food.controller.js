/**
 * 针对图片上传,这个是有权限控制的!!
 */
const BasController = require('./_bas.controller');

const imagesService = require('../services/food.service');

class FoodController extends BasController {
    constructor(name) {
        super(name, imagesService, );
        this.addRouter('get', '/getBoheData', this.handlerwarp(this.getBoheData));
        this.addRouter('get', '/searchfood', this.handlerwarp(this.serch,{_id:1,nikeName:1,desc:1,image:1,calory:1}));
        this.addRouter('get', '/search', this.handlerwarp(this.foodSearch,{_id:1,nikeName:1,desc:1,image:1,calory:1}));
        this.addRouter('get', '/foodInfo', this.handlerwarp(this.getItem));
    }
    //如果发现没有对应的回去薄荷网进行数据拉取
    async serch(ctx,select = {}){
        let searchOptions = {};
        let nikeName = new RegExp(ctx.query.keyword);
        searchOptions.query = {nikeName:nikeName};
        return this.service.getList(searchOptions,select);
    } 
    async getBoheData(){
        return this.service.getBoheData();
    }
    foodSearch(ctx, select) {
        let searchOptions = {};
        searchOptions.query = {};
        for (let item in ctx.query){
            if (item == 'pageSize'||item == 'pageNum') {
                searchOptions[item] = parseInt(ctx.query[item]);
              
            }else if(item=='category'){
                searchOptions.query[item] = parseInt(ctx.query[item]);
            }else{
                searchOptions.query[item] = {$regex:ctx.query[item]};
            }
        
        }
      
        return this.service.getList(searchOptions, select);
    }

}

module.exports = new FoodController('food').router;