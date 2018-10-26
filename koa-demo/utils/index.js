/**
 * 
 * 公共方法库
 * 
 */

/**
 * 生成token的时间
 * @returns {Date}  
 */
function getExpiresIn() {
    return Date.now() + 7200 * 1000;
}

module.exports = {
    getExpiresIn
};