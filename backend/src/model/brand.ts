// @ts-ignore
import pool from '../database_connection/db';
import { mark } from '../types/mark';


export class Mark {

  async index(): Promise<mark[]> {
    try {
      // @ts-ignore
      const conn = await pool.connect();
      const sql = 'SELECT * FROM productmark';

      const result = await conn.query(sql);

      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`Could not get marks. Error: ${err}`);
    }
  }

  async show(id: string): Promise<mark> {
    try {
      const sql = 'SELECT * FROM productmark WHERE id=($1)';
      // @ts-ignore
      const conn = await pool.connect();

      const result = await conn.query(sql, [id]);

      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find mark with ${id}. Error: ${err}`);
    }
  }

  async deletemark(id: string) {
    try {
      const sql = 'delete FROM productmark WHERE id=($1)';
      // @ts-ignore
      const conn = await pool.connect();

      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rowCount;
    } catch (err) {
      throw new Error(`Error: ${err}`);
    }
  }

  async create(m: mark): Promise<mark> {
    try {
      const sql =
        'INSERT INTO productmark (name,image) VALUES ($1, $2) RETURNING *';
      // @ts-ignore
      const conn = await pool.connect();
      const result = await conn.query(sql, [m.name, m.image]);
      const users = result.rows[0];
      conn.release();
      return users;
    } catch (err) {
      throw new Error(`Could not add new mark`);
    }
  }

  async checkbrandexist(brand: string): Promise<boolean> {
    try {
      const sql = 'SELECT EXISTS(SELECT 1 FROM productmark WHERE name = $1)';
      // @ts-ignore
      const conn = await pool.connect();

      const result = await conn.query(sql, [brand]);
      conn.release();

      return result.rows[0].exists;
    } catch (err) {
      throw new Error(` Error: ${err}`);
    }
  }
}
