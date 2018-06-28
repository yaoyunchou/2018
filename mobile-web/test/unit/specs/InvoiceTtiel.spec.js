// import { MockList200Success, MockList200Faile, MockList500 } from '../..//mock/InvoiceTtile.mock.js'
// import MockStore from '../../mock/Store'
// import InvoiceTitleStore from '@/store/modules/InvoiceTitle'

// const store = new MockStore(InvoiceTitleStore)

// describe('invoice title vuex store test', () => {
//   it('test get list work correctly', async () => {
//     MockList200Success()
//     let result = await store.dispatch('getList', {pageNum: 1, filter: ''})
//     expect(result.isSuccess).toBe(true)
//     expect(result.data[0].title).toBe('深圳市牛商网络股份有限公司')
//     expect(store.state.items.length).toBe(1)
//     expect(store.state.items[0].title).toBe('深圳市牛商网络股份有限公司')
//   })

//   it('test get list work reulst 500 mistake', async () => {
//     MockList500()
//     let result = await store.dispatch('getList', {pageNum: 1, filter: ''})
//     expect(result instanceof Error).toBe(true)
//     expect(result.response.status).toBe(500)
//   })

//   it('test get list work reulst server message mistake', async () => {
//     MockList200Faile()
//     let result = await store.dispatch('getList', {pageNum: 1, filter: ''})
//     expect(result instanceof Error).toBe(true)
//     expect(result.message).toBe('系统未知错误')
//   })
// })
