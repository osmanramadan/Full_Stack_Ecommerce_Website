'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const order_1 = require('../../../model/services/order');
const orderservices = new order_1.Orderservices();
describe('#################### OrderServisces Model ##################', () => {
  describe(':::::::::: queries:', () => {
    it('check status:', async () => {
      const record = await orderservices.checkstatus(3, 'complete');
      expect(record).toBeDefined;
    });
  });
});
