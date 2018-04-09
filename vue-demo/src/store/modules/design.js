/**
 * user state
 */
import BasDetail from '../_base.detail'
import BasList from '../_base.list'

class DesignDetail extends BasDetail {
  constructor() {
    super({
      uri: 'api/design',
    });
  }
}



class DesignList extends BasList {
  constructor() {
    super({
      loadUri: 'api/design/list',
    });
  }
  backData(data){
    data = {
      dataList:data.list,
      pageSize:data.pageSize,
      pageNumb:data.pageNum,
      total:data.total
    }
    return{
      isSuccess: true,
      data:data
    }
  }
}
const designDetail = new DesignDetail();
const designList = new DesignList();
export default {
  namespaced:true,
  state: { 
    ...designDetail.state,...designList.state
  },
  mutations: {
    ...designDetail.mutations,...designList.mutations
  },
  actions: { 
    ...designDetail.actions,...designList.actions
  },
  getters: { 
    ...designDetail.getters,...designList.getters
  }
}
