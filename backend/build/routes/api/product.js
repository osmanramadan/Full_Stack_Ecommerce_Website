'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const product_1 = __importDefault(require('../../controller/product'));
const product_2 = __importDefault(require('../../controller/services/product'));
const jwtmiddelware_1 = __importDefault(
  require('../../authorization/middelware/jwtmiddelware')
);
const productcontroller = new product_1.default();
const productcontrollerservices = new product_2.default();
const products = express_1.default.Router();
products.get('/', productcontroller.index);
products.get('/mostpopular', productcontrollerservices.mostpopular);
products.get('/productcate/:cate', productcontrollerservices.getproductsbycate);
products.get('/:id', productcontroller.show);
products.delete(
  '/delete/:id',
  jwtmiddelware_1.default,
  productcontroller.delete
);
products.put('/update', jwtmiddelware_1.default, productcontroller.update);
products.post('/', jwtmiddelware_1.default, productcontroller.create);
exports.default = products;
