'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.Order = void 0;
// @ts-ignore
const db_1 = __importDefault(require('../database_connection/db'));
class Order {
  async show(userid) {
    try {
      const sql = 'SELECT * FROM  orders WHERE user_id=($1)';
      // @ts-ignore
      const conn = await db_1.default.connect();
      const result = await conn.query(sql, [userid]);
      const orders = result.rows;
      conn.release();
      return orders;
    } catch (err) {
      throw new Error(`Could not find order with ${userid}. Error: ${err}`);
    }
  }
  async create(o) {
    try {
      const sql =
        'INSERT INTO orders (user_id,order_status) VALUES ($1, $2) RETURNING *';
      // @ts-ignore
      const conn = await db_1.default.connect();
      const result = await conn.query(sql, [o.user_id, o.order_status]);
      const orders = result.rows[0];
      conn.release();
      return orders;
    } catch (err) {
      throw new Error(`can't add new order`);
    }
  }
  async addproductsto_order(o) {
    try {
      const sql =
        'INSERT INTO orders_product (product_id,order_id,quantity) VALUES ($1, $2, $3) RETURNING *';
      // @ts-ignore
      const conn = await db_1.default.connect();
      const result = await conn.query(sql, [
        o.product_id,
        o.order_id,
        o.quantity
      ]);
      const orderproduct = result.rows[0];
      conn.release();
      return orderproduct;
    } catch (err) {
      throw new Error(`${err}`);
    }
  }
  async deleteorder(id) {
    try {
      const sql = 'delete FROM orders WHERE id=($1)';
      // @ts-ignore
      const conn = await db_1.default.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Could not delete order with ${id}. Error: ${err}`);
    }
  }
  async updateorderstatus(orderstatus, id) {
    try {
      const sql =
        'UPDATE orders SET order_status=($1) WHERE id=($2) RETURNING * ';
      // @ts-ignore
      const conn = await db_1.default.connect();
      const result = await conn.query(sql, [orderstatus, id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`${err}`);
    }
  }
  async updateproductsoforder(o) {
    try {
      const sql =
        'UPDATE orders_product SET product_id=($1),order_id=($2),quantity=($3) WHERE id=($4) RETURNING *';
      // @ts-ignore
      const conn = await db_1.default.connect();
      const result = await conn.query(sql, [
        o.product_id,
        o.order_id,
        o.quantity,
        o.id
      ]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`${err}`);
    }
  }
}
exports.Order = Order;
