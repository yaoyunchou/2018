const axios = require('axios');


function warpAxios (method,url,options){
    options = options||{};
    options.url = url;
    options.method = method;
    
    return new Promise((resolve,reject)=>{
        axios(options).then(function(response){
            if(response.data.isSuccess){
                resolve(response.data);
            }else{
                reject(response.data.msg);
            }
        },function(err){
            reject(err);
        })
    }) ;
}


export default {
    get(url,options) {
        return warpAxios('get',url,options);
    },
    post(url,options) {
        return warpAxios('post',url,options);
    },
    put(url,options) {
        return warpAxios('put',url,options);
    },
    delete(url,options) {
        return warpAxios('delete',url,options);
    }
}
