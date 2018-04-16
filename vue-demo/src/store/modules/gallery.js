/**
 * user state
 */
import BasDetail from '../_base.detail'
import BasList from '../_base.list'

class GalleryDetail extends BasDetail {
  constructor() {
    super({
      uri: 'api/upload/image',
    });
  }
}



class GalleryList extends BasList {
  constructor() {
    super({
      loadUri: 'api/images',
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
const galleryDetail = new GalleryDetail();
const galleryList = new GalleryList();
export default {
  namespaced:true,
  state: { 
    ...galleryDetail.state,...galleryList.state
  },
  mutations: {
    ...galleryDetail.mutations,...galleryList.mutations
  },
  actions: { 
    ...galleryDetail.actions,...galleryList.actions
  },
  getters: { 
    ...galleryDetail.getters,...galleryList.getters
  }
}
