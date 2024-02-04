'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const product_1 = require('../../model/services/product');
const productservices = new product_1.Productservices();
class ProductServicesController {
  constructor() {
    this.getproductsbycate = async (req, res) => {
      try {
        const products = await productservices.productCate(req.params.cate);
        res.json(products);
      } catch (e) {
        res.status(400);
        res.json({ status: 'fail' });
      }
    };
    this.mostpopular = async (_req, res) => {
      try {
        const products = await productservices.mostpopular();
        res.json(products);
      } catch (e) {
        res.status(400);
        res.json({ status: 'fail' });
      }
    };
  }
}
exports.default = ProductServicesController;
