import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import store from '@/store/modules/InvoiceTitle'

var mock = new MockAdapter(axios)

export function MockList200Success () {
  mock.reset()
  mock.onGet(store.LIST_URI, {params: {pageNum: 1, pageSize: 10, filter: ''}}).reply(200, {
    isSuccess: true,
    data: [{
      id: 1,
      title: '深圳市牛商网络股份有限公司'
    }]
  })
}

export function MockList200Faile () {
  mock.reset()
  mock.onGet(store.LIST_URI, {params: {pageNum: 1, pageSize: 10, filter: ''}}).reply(200, {
    isSuccess: false,
    message: '系统未知错误'
  })
}

export function MockList500 () {
  mock.reset()
  mock.onGet(store.LIST_URI, {params: {pageNum: 1, pageSize: 10, filter: ''}}).reply(500, new Error('500'))
}
