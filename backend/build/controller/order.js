'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const order_1 = require('../model/order');
const orderobject = new order_1.Order();
class Ordercontroller {
  constructor() {
    this.show = async (req, res) => {
      try {
        const orderbyuser = await orderobject.show(parseInt(req.params.userid));
        res.json(orderbyuser);
      } catch (err) {
        res.status(400);
        res.json({ status: 'fail' });
      }
    };
    this.delete = async (req, res) => {
      try {
        const deleted = await orderobject.deleteorder(parseInt(req.params.id));
        res.json(deleted);
      } catch (err) {
        res.status(400);
        res.json({ status: 'fail' });
      }
    };
    this.updateorderstatus = async (req, res) => {
      try {
        const updated = await orderobject.updateorderstatus(
          req.body.status,
          parseInt(req.body.id)
        );
        res.json(updated);
      } catch (err) {
        res.status(400);
        res.json({ status: 'fail' });
      }
    };
    this.updateproductsoforder = async (req, res) => {
      try {
        const orderquery = {
          id: parseInt(req.body.id),
          product_id: parseInt(req.body.productid),
          quantity: parseInt(req.body.quantity),
          order_id: parseInt(req.body.orderid)
        };
        const updated = await orderobject.updateproductsoforder(orderquery);
        res.json(updated);
      } catch (err) {
        res.status(400);
        res.json({ status: 'fail' });
      }
    };
    this.create = async (req, res) => {
      try {
        const orderquery = {
          user_id: parseInt(req.body.userid),
          order_status: req.body.status
        };
        const neworder = await orderobject.create(orderquery);
        res.json(neworder);
      } catch (err) {
        res.status(400);
        res.json({ status: 'fail' });
      }
    };
    this.addproductsorder = async (req, res) => {
      try {
        const orderquery = {
          product_id: parseInt(req.body.productid),
          quantity: parseInt(req.body.quantity),
          order_id: parseInt(req.body.orderid)
        };
        const neworderproducts = await orderobject.addproductsto_order(
          orderquery
        );
        res.json(neworderproducts);
      } catch (err) {
        res.status(400);
        res.json({ status: 'fail' });
      }
    };
  }
}
exports.default = Ordercontroller;
