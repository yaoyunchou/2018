import BasStore from './_base.store'

export default class BasList extends BasStore {
  constructor(options) {
    super(options.uri)
    this.listUri = options.loadUri || options.uri;
    this.pageSize = options.pagesize||10;
    this.pageNum =  options.pageNum||1;
    this.enableSearch = true;
    this.state ={
        dataList:{}
    }
    this.actions = {
        getList:this.getList.bind(this)
    }
    this.mutations = {
      setDateList:this.setDataList
  }   
  }
  /**
   * 增删改查
   */

  async getList({state,rootState,commit},data) {
    data = data ||{};
    
    let options = {...data.query,
        pageNum:data.pageNum||this.pageNum,
        pageSize:data.pageSize||this.pageSize,
    };
    if(typeof this.beforeListLoad === 'function'){
        options = this.beforeListLoad(options);
    }
    let response = await this.httpGet(this.listUri,options);
    if (response.data.isSuccess) {
      this.dataList = response.data.data;
      if(typeof this.afterListLoad === 'Function'){
        this.dataList = afterListLoad(this.dataList);
       }
       commit('setDateList', this.dataList)
       return this.backData(this.dataList)
    } else {
      return this.throwError(response.data.data);
    }
  }
  setDataList({state},data){
    this.dataList = data;
  }
  setPageNum(num){
    this.pageNum = num;
  }
  setPageSize(num){
    this.pageSize = num;
  }
  backData(data){
    return{
      isSuccess: true,
      data:data
    }
  }
  throwError(err){
    return{
      isSuccess: false,
      data:err
    }
  }
}
