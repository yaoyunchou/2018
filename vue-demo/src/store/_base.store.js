
/**
 * 封装常见的一些http的方法
 */
import axios  from 'axios'

export default  class BasStore{
    constructor(uri){
        this.uri = uri;
    }
    httpGet(url=this.uri,data){
        let options = {
            url:url,
            method:"get",
            params:data
        }
       return  axios(options);
    }
    httpPost(url=this.uri,data){
        let options = {
            url:url,
            method:"post",
            data:data
        }
       return  axios(options);
    }
    httpPut(url=this.uri,data){
        let options = {
            url:url,
            method:"put",
            data:data
        }
       return  axios(options);
    }
    httpdelete(url=this.uri,data){
        let options = {
            url:url,
            method:'delete',
            params:data
        }
       return  axios(options);
    }

}