/**
 * 封装常见的一些http的方法
 */
import axios from 'axios'
import router from '../router'

axios.interceptors.response.use(
  response => {
      console.log(response);
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401: // 返回 401 清除token信息并跳转到登录页面
        router.push({name:'LoginRegister'});
      }
    }
    return Promise.reject(error.response.data) // 返回接口返回的错误信息
  });
export default class BasStore {
  constructor(uri) {
    this.uri = uri;
  }
  httpGet(url = this.uri, data) {
    let options = {
      url: url,
      method: "get",
      params: data
    }
    return axios(options);
  }
  httpPost(url = this.uri, data) {
    let options = {
      url: url,
      method: "post",
      data: data
    }
    return axios(options);
  }
  httpPut(url = this.uri, data) {
    let options = {
      url: url,
      method: "put",
      data: data
    }
    return axios(options);
  }
  httpdelete(url = this.uri, data) {
    let options = {
      url: url,
      method: 'delete',
      params: data
    }
    return axios(options);
  }

}
