'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const product_1 = require('../../../model/services/product');
const productservices = new product_1.Productservices();
describe('#################### ProductServices Model ##################', () => {
  describe(':::::::::: queries:', () => {
    it('most popular:', async () => {
      const record = await productservices.mostpopular();
      expect(record).toBeDefined;
    });
    it('get products by category:', async () => {
      const record = await productservices.productCate('cate');
      expect(record).toBeDefined;
    });
  });
});
