// @ts-ignore
import pool from '../database_connection/db';
import { coupon } from '../types/coupon';



export class Coupon {
  async index(): Promise<coupon[]> {
    try {
      // @ts-ignore
      const conn = await pool.connect();
      const sql = 'SELECT * FROM  discountcoupon';

      const result = await conn.query(sql);

      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`Could not get coupons. Error: ${err}`);
    }
  }

  async show(name: string): Promise<coupon> {
    try {
      const sql = 'SELECT * FROM discountcoupon  WHERE name=($1)';
      // @ts-ignore
      const conn = await pool.connect();

      const result = await conn.query(sql, [name]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(` Error: ${err}`);
    }
  }

  async deletecoupon(id: string) {
    try {
      const sql = 'delete FROM  discountcoupon WHERE id=($1)';
      // @ts-ignore
      const conn = await pool.connect();

      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rowCount;
    } catch (err) {
      throw new Error(`Could not delete coupon with ${id}. Error: ${err}`);
    }
  }

  async create(c: coupon): Promise<coupon> {
    try {
      const sql =
        'INSERT INTO  discountcoupon (name,discount,expire) VALUES ($1,$2,$3) RETURNING *';
      // @ts-ignore
      const conn = await pool.connect();
      const result = await conn.query(sql, [c.name, c.discount, c.expire]);
      const coupon = result.rows[0];
      conn.release();
      return coupon;
    } catch (err) {
      throw new Error(`Could not add new coupon`);
    }
  }

  async checkcouponexist(name: string): Promise<boolean> {
    try {
      const sql =
        'SELECT EXISTS(SELECT 1 FROM  discountcoupon WHERE name = $1)';
      // @ts-ignore
      const conn = await pool.connect();

      const result = await conn.query(sql, [name]);
      conn.release();
      return result.rows[0].exists;
    } catch (err) {
      throw new Error(` Error: ${err}`);
    }
  }

  async updatecoupon(c: coupon): Promise<boolean> {
    try {
      const sql =
        'update discountcoupon set name=($1), discount=($2), expire=($3)  where id=($4)';
      // @ts-ignore
      const conn = await pool.connect();
      const result = await conn.query(sql, [
        c.name,
        c.discount,
        c.expire,
        c.id
      ]);
      conn.release();
      return result.rowCount;
    } catch (err) {
      throw new Error(`${err}`);
    }
  }
}
