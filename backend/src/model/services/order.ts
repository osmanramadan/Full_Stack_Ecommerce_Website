// @ts-ignore
import pool from '../../database_connection/db';

export class Orderservices {
  async checkstatus(userid: number, status: string) {
    try {
      // @ts-ignore
      const conn = await pool.connect();

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
