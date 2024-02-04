import { Productservices } from '../../../model/services/product';

const productservices = new Productservices();

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
