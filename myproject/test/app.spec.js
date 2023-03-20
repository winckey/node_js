
const request = require('supertest');
const app = require('./app');

describe('GET /user', () => {
  it('should respond with an object containing name, age, and message', async () => {
    const res = await request(app)
      .get('/user')
      .send({
        name: 'John',
        age: 30
      })
      .expect(200);
    
    expect(res.body).toHaveProperty('name', 'John');
    expect(res.body).toHaveProperty('age', 30);
    expect(res.body).toHaveProperty('message', 'John님의 나이는 30살입니다.');
  });
});