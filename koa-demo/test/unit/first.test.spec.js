const server = require('../../main.js');
const request = require('supertest');
const log4js = require('log4js');
const logger = log4js.getLogger('test');
afterEach(() => {
    server.close();
});
var token = '';

test('login is Success', async ()=>{
    const response = await request(server).post('/api/user/login').send({phone:'18124100815',psw:'123456'});
    if(response.body.isSuccess){
        token = response.body.data.token;
        logger.info(token);
    }
    expect(response.body.isSuccess).toBe(true);
});


test('Failed to login ', async () => {
    const response = await request(server).get('/api/design/list').set('token',token);
    expect(response.body.isSuccess).toBe(true);
});

// test('Successed to login if typing Molunerfinn & 123', async () => {
//     const response = await request(server)
//         .post('/auth/user')
//         .send({
//             name: 'Molunerfinn',
//             password: '123'
//         })
//     expect(response.body.success).toBe(true)
// })

// test('Failed to login if typing MARK & 123', async () => {
//     const response = await request(server)
//         .post('/auth/user')
//         .send({
//             name: 'MARK',
//             password: '123'
//         })
//     expect(response.body.info).toBe('用户不存在！')
// })

// test('Getting the user info is null if the url is /auth/user/10', async () => {
//     const response = await request(server)
//         .get('/auth/user/10')
//     expect(response.body).toEqual({})
// })

// test('Getting user info successfully if the url is /auth/user/2', async () => {
//     const response = await request(server)
//         .get('/auth/user/2')
//     expect(response.body.user_name).toBe('molunerfinn')
// })