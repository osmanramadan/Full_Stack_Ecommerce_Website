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
describe('####################### orders end points ########################', () => {
  beforeAll(async () => {
    //to add user with id=1 (for test end point of add new order)
    await request
      .post('/users')
      .send({ firstname: 'osman', lastname: 'mamdoh', password: '123' });
    //to add product
    await request
      .post('/products')
      .set(auth)
      .send({ productname: 'pro1', price: '200', category: 'cate1' });
  });
  describe('main end point:', () => {
    it('/ :', async () => {
      const response = await request.get('/orders').set(auth);
      expect(response.status).toBe(404);
    });
  });
  describe('sub of main end point /:', () => {
    // suppose that there  user with id=3 and and have active and incomplete orders
    it('/active/:userid', async () => {
      const response = await request.get('/orders/active/3').set(auth);
      expect(response.status).toBe(200);
    });
    it('/complete/:userid', async () => {
      const response = await request.get('/orders/complete/3').set(auth);
      expect(response.status).toBe(200);
    });
    it('/ <create order>', async () => {
      const response = await request
        .post('/orders')
        .set(auth)
        .send({ userid: '2', status: 'active' });
      expect(response.status).toBe(200);
    });
    it('/addproductsorder <add products to order>', async () => {
      const response = await request
        .post('/orders/addproductsorder')
        .set(auth)
        .send({
          productid: '3',
          orderid: '2',
          quantity: '3'
        });
      expect(response.status).toBe(400);
    });
    it('/update <update order status>', async () => {
      const response = await request
        .put('/orders/updateorderstatus')
        .set(auth)
        .send({
          status: 'active',
          id: '1'
        });
      expect(response.status).toBe(200);
    });
    it('/update <update orderproducts>', async () => {
      const response = await request
        .put('/orders/updateproductsoforder')
        .set(auth)
        .send({
          id: '22',
          productid: '2',
          orderid: '11',
          quantity: '10'
        });
      expect(response.status).toBe(200);
    });
    it('/del <del order>', async () => {
      const response = await request.delete('/orders/delete/1').set(auth);
      expect(response.status).toBe(200);
    });
    it('/ <create order> without token', async () => {
      const response = await request
        .post('/orders')
        .send({ userid: '3', status: 'active' });
      expect(response.status).toBe(401);
    });
  });
});
