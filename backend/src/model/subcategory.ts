// @ts-ignore
import pool from '../database_connection/db';
import { subcategory } from '../types/subcategory';



export class SubCategory {
  async index(): Promise<subcategory[]> {
    try {
      // @ts-ignore
      const conn = await pool.connect();
      const sql = 'SELECT * FROM productsubcat';

      const result = await conn.query(sql);

      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`Could not get category. Error: ${err}`);
    }
  }

  async show(id: string): Promise<subcategory> {
    try {
      const sql = 'SELECT * FROM productsubcat WHERE id=($1)';
      // @ts-ignore
      const conn = await pool.connect();

      const result = await conn.query(sql, [id]);

      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find category with ${id}. Error: ${err}`);
    }
  }

  async deletesubcategory(id: string) {
    try {
      const sql = 'delete FROM productsubcat WHERE id=($1)';
      // @ts-ignore
      const conn = await pool.connect();

      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rowCount;
    } catch (err) {
      throw new Error(`Could not delete category with ${id}. Error: ${err}`);
    }
  }

  async create(sc: subcategory): Promise<subcategory> {
    try {
      const sql =
        'INSERT INTO productsubcat(name,productcat) VALUES ($1, $2) RETURNING *';
      // @ts-ignore
      const conn = await pool.connect();
      const result = await conn.query(sql, [sc.name, sc.maincat]);
      conn.release();
      return result.rowCount;
    } catch (err) {
      throw new Error(`Could not add new subcategory`);
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

  async checksubcategoryexist(subcat: string): Promise<boolean> {
    try {
      const sql = 'SELECT EXISTS(SELECT 1 FROM productsubcat WHERE name= $1)';
      // @ts-ignore
      const conn = await pool.connect();

      const result = await conn.query(sql, [subcat]);
      conn.release();

      return result.rows[0].exists;
    } catch (err) {
      throw new Error(` Error: ${err}`);
    }
  }
}
