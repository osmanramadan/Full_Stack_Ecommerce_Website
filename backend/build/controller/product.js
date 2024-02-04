'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const product_1 = require('../model/product');
const productobject = new product_1.Product();
class Productcontroller {
  constructor() {
    this.index = async (_req, res) => {
      try {
        const allproducts = await productobject.index();
        res.json(allproducts);
      } catch (e) {
        res.status(400);
        res.json({ status: 'fail' });
      }
    };
    this.show = async (req, res) => {
      try {
        const productbyid = await productobject.show(req.params.id);
        res.json(productbyid);
      } catch (e) {
        res.status(400);
        res.json({ status: 'fail' });
      }
    };
    this.delete = async (req, res) => {
      try {
        const deleted = await productobject.deleteproduct(req.params.id);
        res.json(deleted);
      } catch (err) {
        res.status(400);
        res.json({ status: 'fail' });
      }
    };
    this.update = async (req, res) => {
      try {
        const updated = await productobject.updateproduct(
          req.body.productname,
          req.body.price,
          req.body.category,
          req.body.id
        );
        res.json(updated);
      } catch (err) {
        res.status(400);
        res.json({ status: 'fail' });
      }
    };
    this.create = async (req, res) => {
      try {
        const productquery = {
          Pname: req.body.productname,
          price: req.body.price,
          category: req.body.category
        };
        const newproduct = await productobject.create(productquery);
        res.json(newproduct);
      } catch (err) {
        res.status(400);
        res.json({ status: 'fail' });
      }
    };
  }
}
exports.default = Productcontroller;
