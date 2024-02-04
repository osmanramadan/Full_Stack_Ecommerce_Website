'use strict';
// @ts-ignore
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.Orderservices = void 0;
const db_1 = __importDefault(require('../../database_connection/db'));
class Orderservices {
  async checkstatus(userid, status) {
    try {
      // @ts-ignore
      const conn = await db_1.default.connect();
      const sql =
        'SELECT * from orders where user_id=($1) and order_status=($2)';
      const result = await conn.query(sql, [userid, status]);
      const orders = result.rows;
      conn.release();
      return orders;
    } catch (err) {
      throw new Error(`can't get orders. Error: ${err}`);
    }
  }
}
exports.Orderservices = Orderservices;
