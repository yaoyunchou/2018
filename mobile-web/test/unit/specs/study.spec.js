/**
 * Mock测试
 *
 * 如何去模拟一个http请求
 */

// users.test.js

import axios from 'axios'

jest.mock('axios')
describe('this is http mock', () => {
  test('should fetch users', () => {
    const resp = {
      data: [{
        name: 'Bob'
      }]
    }
    axios.get.mockResolvedValue(resp)

    // or you could use the following depending on your use case:
    // axios.get.mockImplementation(() => Promise.resolve(resp))
    // return Users.all().then(users => expect(users).toEqual(resp.data));
  })
  test('should fetch users2', () => {
    const resp = {
      data: [{
        name: 'yao'
      }]
    }

    axios.get.mockResolvedValue(resp)

    // or you could use the following depending on your use case:
    // axios.get.mockImplementation(() => Promise.resolve(resp))

    // return gitList().then(users => expect(users).toEqual(resp.data));
  })
})
