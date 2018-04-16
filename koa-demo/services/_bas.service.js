/**
 * 服务基类
 *
 */
const mongoose = require('mongoose');
const log4js = require('log4js');
const content = require('../app.content');
module.exports = class basService {
    constructor(name, schema) {
        this.name = name;
        this.DbModal = mongoose.model(name, schema);
        this.logger = log4js.getLogger(this.name);
        this.content = content;
    }
    /**
     * 保存数据
     * @param {object} data 
     */
    async save(data) {
        try {
            let entiry = new this.DbModal(data);
            let backData = await entiry.save();
            return {
                isSuccess: true,
                data: backData
            };
        } catch (error) {
            return this.thorwError(error);
        }
    }
    /**
     * 获取数据
     * TODO 这里先放着后面完善
     * @param {object} searchOptions 
     */
    async getList(searchOptions,select={}) {
        // let defaultOptions = {
        try {
            searchOptions = Object.assign({
                query: {},
                pageSize: 10,
                pageNum: 1,
            }, searchOptions);
            let count = await this.DbModal.find(searchOptions.query).count();
            let listData = await this.DbModal.find(searchOptions.query,select).skip((searchOptions.pageNum - 1) * searchOptions.pageSize).limit(searchOptions.pageSize);
            return {
                isSuccess: true,
                data: {
                    'list': listData,
                    'count': count,
                    'pageNum': searchOptions.pageNum
                }
            };




        } catch (error) {
            return this.thorwError(error);
        }
    }
    /**
     * 通过id查询
     */
    async getItem(options, expect = {}) {
        try {
            let item = {};
            if (options instanceof String) {
                item = await this.DbModal.findById(options, expect);
            } else {
                item = await this.DbModal.find(options, expect);
                item = item.length&&item[0];
            }

            return {
                isSuccess: true,
                data: item
            };
        } catch (error) {
            return this.thorwError(error);

        }
    }
    async updateItem(data) {
        try {
            let item = {};
            item = await this.DbModal.findByIdAndUpdate(data._id, data);
            item = item.length&&item[0];
            return {
                isSuccess: true,
                data: item
            };
        } catch (error) {
            return this.thorwError(error);

        }
    }
    async deleteItem(id) {

    }
    thorwError(err) {
        this.logger.error(err);
        return {
            isSuccess: false,
            err: err
        };
    }
};