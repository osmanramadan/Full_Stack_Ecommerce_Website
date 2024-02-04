'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.Product = void 0;
// @ts-ignore
const db_1 = __importDefault(require('../database_connection/db'));
class Product {
  async index() {
    try {
      // @ts-ignore
      const conn = await db_1.default.connect();
      const sql = 'SELECT * FROM products';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Could not get products. Error: ${err}`);
    }
  }
  async show(id) {
    try {
      const sql = 'SELECT * FROM products WHERE id=($1)';
      // @ts-ignore
      const conn = await db_1.default.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find product with ${id}. Error: ${err}`);
    }
  }
  async deleteproduct(id) {
    try {
      const sql = 'delete FROM products WHERE id=($1)';
      // @ts-ignore
      const conn = await db_1.default.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Could not delete product with ${id}. Error: ${err}`);
    }
  }
  async updateproduct(productname, price, category, id) {
    try {
      const sql =
        'UPDATE products SET pname=($1), price=($2),category=($3) WHERE id=($4)';
      // @ts-ignore
      const conn = await db_1.default.connect();
      const result = await conn.query(sql, [productname, price, category, id]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Could not update product with ${id}. Error: ${err}`);
    }
  }
  async create(p) {
    try {
      const sql =
        'INSERT INTO products (Pname,price,category) VALUES ($1, $2, $3) RETURNING *';
      // @ts-ignore
      const conn = await db_1.default.connect();
      const result = await conn.query(sql, [p.Pname, p.price, p.category]);
      const users = result.rows[0];
      conn.release();
      return users;
    } catch (err) {
      throw new Error(`Could not add new product`);
    }
  }
}
exports.Product = Product;
