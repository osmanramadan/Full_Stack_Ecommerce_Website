import supertest from 'supertest';
import app from '../../../index';

const request: supertest.SuperTest<supertest.Test> = supertest(app);
// token from server the access to end points will be forbidden if you use different token
const token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaW5mbyI6eyJpZCI6NDIsImZpcnN0bmFtZSI6ImVuYXMiLCJsYXN0bmFtZSI6Im1hbWhvaCIsInVwYXNzd29yZCI6IiQyYiQxMCRvVEZUR1J4U0hhdFhLQUpraldFVW9PcTAucDhZVElDR2dPTTEyNENLOGRDaGlNazdHQjV5QyJ9LCJpYXQiOjE2NzYzMTA0ODF9.yqflDoQLjIjVZxOn14vuSoW2jkts417e7qOUbvYl7OA';

const auth = { Authorization: token };

describe('########################## users end points #####################', () => {
  describe('main end point:', () => {
    it('/ :', async () => {
      const response: supertest.Response = await request
        .get('/users')
        .set(auth);

      expect(response.status).toBe(200);
    });
  });

  describe('sub of main end point /:', () => {
    // suppose there is user with id=3 in database
    it('/:userid/purchases <user purchases>', async () => {
      const response: supertest.Response = await request
        .get('/users/3/purchases')
        .set(auth);
      expect(response.status).toBe(200);
    });
    it('/:id <get user id>', async () => {
      const response: supertest.Response = await request
        .get('/users/')
        .set(auth);
      expect(response.status).toBe(200);
    });
    it('/update <update user>', async () => {
      const response: supertest.Response = await request
        .put('/users/update')
        .set(auth);
      expect(response.status).toBe(200);
    });
    it('/del <del user>', async () => {
      const response: supertest.Response = await request
        .delete('/users/delete/7')
        .set(auth);
      expect(response.status).toBe(200);
    });

    it('/ <create new user>', async () => {
      // suppose that there is user in database with name=osmanramadan and password=123
      const response: supertest.Response = await request
        .post('/users')
        .send({
          firstname: 'test',
          lastname: 'test',
          password: '123'
        })
        .set(auth);

      expect(response.status).toBe(200);
    });

    it('/login <getuserbycredentials>', async () => {
      // suppose that there is user in database with name=osmanramadan and password=123
      const response: supertest.Response = await request
        .post('/users/login')
        .send({
          username: 'test',
          password: '123'
        });

      expect(response.status).toBe(200);
    });
  });
});
