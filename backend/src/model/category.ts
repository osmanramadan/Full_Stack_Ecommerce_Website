// @ts-ignore
import pool from '../database_connection/db';
import { category } from '../types/category';



export class Category {
  async index(): Promise<category[]> {
    try {
      // @ts-ignore
      const conn = await pool.connect();
      const sql = 'SELECT * FROM productcat';

      const result = await conn.query(sql);

      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`Could not get category. Error: ${err}`);
    }
  }

  async show(id: string): Promise<category> {
    try {
      const sql = 'SELECT * FROM productcat WHERE id=($1)';
      // @ts-ignore
      const conn = await pool.connect();

      const result = await conn.query(sql, [id]);

      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find category with ${id}. Error: ${err}`);
    }
  }

  async deletecategory(id: string) {
    try {
      const sql = 'delete FROM productcat WHERE id=($1)';
      // @ts-ignore
      const conn = await pool.connect();

      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rowCount;
    } catch (err) {
      throw new Error(`Could not delete category with ${id}. Error: ${err}`);
    }
  }

  async create(c: category): Promise<category> {
    try {
      const sql =
        'INSERT INTO productcat(catname,image) VALUES ($1, $2) RETURNING *';
      // @ts-ignore
      const conn = await pool.connect();
      const result = await conn.query(sql, [c.name, c.image]);
      conn.release();
      return result.rowCount;
    } catch (err) {
      throw new Error(`Could not add new category`);
    }
  }

  async checkcategoryexist(cat: string): Promise<boolean> {
    try {
      const sql = 'SELECT EXISTS(SELECT 1 FROM productcat WHERE catname = $1)';
      // @ts-ignore
      const conn = await pool.connect();

      const result = await conn.query(sql, [cat]);
      conn.release();

      return result.rows[0].exists;
    } catch (err) {
      throw new Error(` Error: ${err}`);
    }
  }
}
