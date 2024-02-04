'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const order_1 = __importDefault(require('../../controller/order'));
const order_2 = __importDefault(require('../../controller/services/order'));
const jwtmiddelware_1 = __importDefault(
  require('../../authorization/middelware/jwtmiddelware')
);
const ordercontroller = new order_1.default();
const ordercontrollerservices = new order_2.default();
const orders = express_1.default.Router();
orders.get('/:userid', jwtmiddelware_1.default, ordercontroller.show);
orders.get(
  '/active/:userid',
  jwtmiddelware_1.default,
  ordercontrollerservices.useractiveorders
);
orders.get(
  '/complete/:userid',
  jwtmiddelware_1.default,
  ordercontrollerservices.usercompleteorders
);
orders.post('/', jwtmiddelware_1.default, ordercontroller.create);
orders.post(
  '/addproductsorder',
  jwtmiddelware_1.default,
  ordercontroller.addproductsorder
);
orders.delete('/delete/:id', jwtmiddelware_1.default, ordercontroller.delete);
orders.put(
  '/updateorderstatus',
  jwtmiddelware_1.default,
  ordercontroller.updateorderstatus
);
orders.put(
  '/updateproductsoforder',
  jwtmiddelware_1.default,
  ordercontroller.updateproductsoforder
);
exports.default = orders;
