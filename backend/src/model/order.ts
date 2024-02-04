// @ts-ignore
import pool from '../database_connection/db';
import { order } from '../types/order';



export class Order {
  async index(): Promise<order> {
    try {
      const sql = 'SELECT * FROM  orders';
      // @ts-ignore
      const conn = await pool.connect();

      const result = await conn.query(sql);
      const orders = result.rows;
      conn.release();

      return orders;
    } catch (err) {
      throw new Error(`Could not find orders Error: ${err}`);
    }
  }

  async show(userid: number): Promise<order> {
    try {
      const sql = 'SELECT * FROM  orders WHERE user_id=($1)';
      // @ts-ignore
      const conn = await pool.connect();

      const result = await conn.query(sql, [userid]);
      const orders = result.rows;
      conn.release();

      return orders;
    } catch (err) {
      throw new Error(`Could not find order with ${userid}. Error: ${err}`);
    }
  }

  async create(o: order): Promise<order> {
    try {
      const sql =
        'INSERT INTO orders (userinfo, address, items, user_id, order_status,price) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *';
      // @ts-ignore
      const conn = await pool.connect();

      const result = await conn.query(sql, [
        o.userinfo,
        o.address,
        o.items,
        o.user_id,
        o.order_status,
        o.price
      ]);

      const orders = result.rows;
      conn.release();

      return orders;
    } catch (err) {
      
      throw new Error(`can't add new order`);
    }
  }

  async deleteorder(id: number) {
    try {
      const sql = 'delete FROM orders WHERE id=($1)';
      // @ts-ignore
      const conn = await pool.connect();

      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rowCount;
    } catch (err) {
      throw new Error(`Could not delete order with ${id}. Error: ${err}`);
    }
  }

  async updateorderstatus(id: number, newstatus: string): Promise<boolean> {
    try {
      const sql =
        'UPDATE orders SET order_status=($1) WHERE id=($2) RETURNING *';
      // @ts-ignore
      const conn = await pool.connect();

      const result = await conn.query(sql, [newstatus, id]);
      conn.release();

      if (result.rowCount) {
        return true;
      }
      return false;
    } catch (err) {
      throw new Error(`${err}`);
    }
  }
}
