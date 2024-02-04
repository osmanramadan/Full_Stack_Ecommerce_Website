'use strict';
// @ts-ignore
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.Userservices = void 0;
const db_1 = __importDefault(require('../../database_connection/db'));
class Userservices {
  async userpurchases(userid) {
    try {
      // @ts-ignore
      const conn = await db_1.default.connect();
      const sql =
        "SELECT pname from products where id in (SELECT product_id from orders inner join orders_product on orders.id=orders_product.order_id where orders.user_id=($1) and orders.order_status='complete')";
      const result = await conn.query(sql, [userid]);
      const purchases = result.rows;
      conn.release();
      return purchases;
    } catch (err) {
      throw new Error(` Error: ${err}`);
    }
  }
}
exports.Userservices = Userservices;
