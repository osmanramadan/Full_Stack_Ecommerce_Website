'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const product_1 = require('../../model/product');
const product = new product_1.Product();
describe('#################### Product Model ##################', () => {
  beforeAll(async () => {
    await product.create({ Pname: 'pro1', price: '22', category: 'cate3' });
    await product.create({ Pname: 'pro2', price: '22', category: 'cate3' });
    await product.create({ Pname: 'pro3', price: '22', category: 'cate3' });
  });
  describe(':::::::::: queries:', () => {
    it('select:', async () => {
      const records = await product.index();
      expect(records).toBeDefined;
    });
    it('select by product id:', async () => {
      const record = await product.show('1');
      expect(record).toBeDefined;
    });
    it('delete by product id:', async () => {
      const record = await product.deleteproduct('1');
      expect(record).toBeDefined;
    });
    it('update by product id:', async () => {
      const updaterecord = await product.updateproduct(
        'updated',
        '22',
        'cate1',
        '2'
      );
      expect(updaterecord).toBeDefined;
    });
    it('create product:', async () => {
      const record = await product.create({
        Pname: 'pro2',
        price: '22',
        category: 'cate3'
      });
      expect(record).toBeDefined;
    });
  });
});
