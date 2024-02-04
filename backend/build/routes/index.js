'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const user_1 = __importDefault(require('./api/user'));
const product_1 = __importDefault(require('./api/product'));
const order_1 = __importDefault(require('./api/order'));
const routes = express_1.default.Router();
routes.use('/users', user_1.default);
routes.use('/orders', order_1.default);
routes.use('/products', product_1.default);
routes.get('/', (_req, res) => {
  res.status(200);
  res.send('this main page of routes');
});
exports.default = routes;
