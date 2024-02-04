'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const user_1 = require('../../model/services/user');
const userservices = new user_1.Userservices();
class UserServicesController {
  constructor() {
    this.userpurchases = async (req, res) => {
      try {
        const purchases = await userservices.userpurchases(req.params.userid);
        res.json(purchases);
      } catch (err) {
        res.status(400);
        res.json({ status: 'fail' });
      }
    };
  }
}
exports.default = UserServicesController;
