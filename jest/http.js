
const axios = require('axios') ;
function  getList(){
  return axios.get('/list').then(resp => {
    console.log(resp);
    return  resp.data
  });
}

module.exports = getList;