'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const supertest_1 = __importDefault(require('supertest'));
const index_1 = __importDefault(require('../../../index'));
const request = (0, supertest_1.default)(index_1.default);
// token from server the access to end points will be forbidden if you use different token
const token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaW5mbyI6eyJpZCI6NDIsImZpcnN0bmFtZSI6ImVuYXMiLCJsYXN0bmFtZSI6Im1hbWhvaCIsInVwYXNzd29yZCI6IiQyYiQxMCRvVEZUR1J4U0hhdFhLQUpraldFVW9PcTAucDhZVElDR2dPTTEyNENLOGRDaGlNazdHQjV5QyJ9LCJpYXQiOjE2NzYzMTA0ODF9.yqflDoQLjIjVZxOn14vuSoW2jkts417e7qOUbvYl7OA';
const auth = { Authorization: token };
describe('######################### products end points ################', () => {
  describe('main end point:', () => {
    it('/ :', async () => {
      const response = await request.get('/products');
      expect(response.status).toBe(200);
    });
  });
  describe('sub of main end point /:', () => {
    it('/mostpopular <user purchases>', async () => {
      const response = await request.get('/products/mostpopular');
      expect(response.status).toBe(200);
    });
    it('/productcate/:cate', async () => {
      const response = await request.get('/products/productcate/cate1');
      expect(response.status).toBe(200);
    });
    it('/:id ', async () => {
      const response = await request.get('/products/2');
      expect(response.status).toBe(200);
    });
    it('/update <update product>', async () => {
      const response = await request.put('/products/update').set(auth);
      expect(response.status).toBe(200);
    });
    it('/del <del product>', async () => {
      const response = await request.delete('/products/delete/1').set(auth);
      expect(response.status).toBe(200);
    });
    it('/ <create product>', async () => {
      const response = await request
        .post('/products')
        .set(auth)
        .send({ productname: 'test', price: '300', category: 'cate1' });
      expect(response.status).toBe(200);
    });
    it('/ <create product> without token', async () => {
      const response = await request
        .post('/products')
        .send({ productname: 'test2', price: '300', category: 'cate1' });
      expect(response.status).toBe(401);
    });
  });
});
