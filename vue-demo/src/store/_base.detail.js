import BasStore from './_base.store'

export default class BasDetail extends BasStore {
  constructor(options) {
    super(options.uri);
    this.createUri = options.createUri || options.uri;
    this.updateUri = options.updateUri || options.uri;
    this.removeUri = options.removeUri || options.uri;
    this.loadUri = options.loadUri || options.uri;
    this.namespaced = true;
    this.state = {
        item:{}
    };
    this.actions = {
        createItem:this.createItem.bind(this),
        removeItem:this.removeItem.bind(this),
        updateItem:this.updateItem.bind(this),
        getItem:this.getItem.bind(this),
    }
    this.mutations = {
        setItem:this.setItem
    }   
  }
  /**
   * 增删改查
   */

  async getItem({state,rootState,commit},data) {
    let response = await this.httpGet(this.loadUri,data);
    if (response.data.isSuccess) {
      return {
        isSuccess: true,
        data:response.data.data
      };
    } else {
      return {
        isSuccess: false,
        data:response.data.data
      }
    }
  }
  async createItem({state,rootState,commit},data) {
    let response = await this.httpPost(this.createUri,data);
    if (response.data.isSuccess) {
      return {
        isSuccess: true,
        data:response.data.data
      };
    } else {
      return {
        isSuccess: false,
        data:response.data.data
      }
    }
  }
  async removeItem({state,rootState,commit},data) {
    let response = await this.httpDelete(this.removeUri,data);
    if (response.data.isSuccess) {
      return {
        isSuccess: true,
        data:response.data.data
      };
    } else {
      return {
        isSuccess: false,
        data:response.data.data
      }
    }
  }
  async updateItem({state,rootState,commit},data) {
    let response = await this.httpPut(this.updateUri,data);
    if (response.data.isSuccess) {
      return {
        isSuccess: true,
        data:response.data.data
      };
    } else {
      return {
        isSuccess: false,
        data:response.data.data
      }
    }
  }
  setItem({state},item){
    state.item = item;
  }

}
