// @ts-ignore

import pool from '../../database_connection/db';
import { user } from '../../types/user';


export class Userservices {
  async userpurchases(userid: string): Promise<user[]> {
    try {
      // @ts-ignore
      const conn = await pool.connect();
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
