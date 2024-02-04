'use strict';
// @ts-ignore
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.Productservices = void 0;
const db_1 = __importDefault(require('../../database_connection/db'));
class Productservices {
  async productCate(cate) {
    try {
      // @ts-ignore
      const conn = await db_1.default.connect();
      const sql = 'SELECT * FROM products WHERE category=($1)';
      const result = await conn.query(sql, [cate]);
      const products = result.rows;
      conn.release();
      return products;
    } catch (err) {
      throw new Error(`can't get products. Error: ${err}`);
    }
  }
  async mostpopular() {
    try {
      // @ts-ignore
      const conn = await db_1.default.connect();
      const sql =
        'SELECT pname as nameOfproduct , count(pname) as ordered FROM orders_product INNER JOIN products on orders_product.product_id=products.id group by products.pname order by count(pname)  desc limit 5';
      const result = await conn.query(sql);
      const products = result.rows;
      conn.release();
      return products;
    } catch (err) {
      throw new Error(` Error: ${err}`);
    }
  }
}
exports.Productservices = Productservices;
