// @ts-ignore

import pool from '../../database_connection/db';
import { popular, product } from '../../types/product';




export class Productservices {
  async productCate(cate: string): Promise<product[]> {
    try {
      // @ts-ignore
      const conn = await pool.connect();

      const sql = 'SELECT * FROM products WHERE category=($1)';

      const result = await conn.query(sql, [cate]);
      const products = result.rows;
      conn.release();

      return products;
    } catch (err) {
      throw new Error(`can't get products. Error: ${err}`);
    }
  }
  async mostpopular(): Promise<popular[]> {
    try {
      // @ts-ignore
      const conn = await pool.connect();
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
