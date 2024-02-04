'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const order_1 = require('../../model/services/order');
const ordersservices = new order_1.Orderservices();
class OrderServicesController {
  constructor() {
    this.useractiveorders = async (req, res) => {
      try {
        const orders = await ordersservices.checkstatus(
          parseInt(req.params.userid),
          'active'
        );
        res.json(orders);
      } catch (e) {
        res.status(400);
        res.json({ status: 'fail' });
      }
    };
    this.usercompleteorders = async (req, res) => {
      try {
        const orders = await ordersservices.checkstatus(
          parseInt(req.params.userid),
          'complete'
        );
        res.json(orders);
      } catch (e) {
        res.status(400);
        res.json({ status: 'fail' });
      }
    };
  }
}
exports.default = OrderServicesController;
