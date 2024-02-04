// @ts-ignore
import pool from '../database_connection/db';
import { product ,prodComment } from '../types/product';


export class Product {
  async index(): Promise<any | boolean> {
    try {
      // @ts-ignore
      const conn = await pool.connect();
      const sql = 'SELECT * FROM products';
      const result = await conn.query(sql);

      conn.release();

      if (result.rowCount) {
        return result.rows;
      }

      return false;
    } catch (err) {
      throw new Error(`Could not get products  Error: ${err}`);
    }
  }

  async show(id: string): Promise<product | boolean> {
    try {
      const sql = 'SELECT * FROM products WHERE id=($1)';
      // @ts-ignore
      const conn = await pool.connect();

      const result = await conn.query(sql, [id]);

      conn.release();

      if (result.rowCount) {
        return result.rows[0];
      }
      return false;
    } catch (err) {
      throw new Error(`Could not find product with ${id}. Error: ${err}`);
    }
  }

  async deleteproduct(id: string) {
    try {
      const sql = 'delete FROM products WHERE id=($1)';
      // @ts-ignore
      const conn = await pool.connect();

      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rowCount;
    } catch (err) {
      throw new Error(`Could not delete product with ${id}. Error: ${err}`);
    }
  }

  async updateproduct(p: product) {
    try {
      const sql = `UPDATE products SET ptitle=($2),pdesc=($3),price=($4),discount=($5),priceafterdiscount=($6),category=($7),subcategory=($8),brand=($9),colors=($10),images=($11),coverimage=($12) WHERE id=($1)`;
      // @ts-ignore
      const conn = await pool.connect();
      const result = await conn.query(sql, [
        p.id,
        p.ptitle,
        p.pdesc,
        p.price,
        p.discount,
        p.priceafterdiscount,
        p.category,
        p.subcategory,
        p.brand,
        p.colors,
        p.images,
        p.coverimage
      ]);
      conn.release();
      return result.rowCount;
    } catch (err) {
      throw new Error(`Could not update product with ${p.id}. Error: ${err}`);
    }
  }

  async create(p: product): Promise<product> {
    try {
      const sql =
        'INSERT INTO products (ptitle,pdesc,price,discount,priceafterdiscount,category,subcategory,brand,colors,images,coverimage) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *';
      // @ts-ignore
      const conn = await pool.connect();
      const result = await conn.query(sql, [
        p.ptitle,
        p.pdesc,
        p.price,
        p.discount,
        p.priceafterdiscount,
        p.category,
        p.subcategory,
        p.brand,
        p.colors,
        p.images,
        p.coverimage
      ]);
      const users = result.rows[0];
      conn.release();
      return users;
    } catch (err) {
      throw new Error(`Could not add new product: ${err}`);
    }
  }

  async addComment(c: prodComment): Promise<prodComment> {
    try {
      const sql =
        'INSERT INTO productcomment (text,username,stars,prodid) VALUES ($1, $2,$3,$4) RETURNING *';
      // @ts-ignore
      const conn = await pool.connect();
      const result = await conn.query(sql, [
        c.text,
        c.username,
        c.stars,
        c.prodid
      ]);
      const comment = result.rows[0];
      conn.release();
      return comment;
    } catch (err) {
      throw new Error(`Could not add new mark`);
    }
  }

  async showcomments(id: string): Promise<product | boolean> {
    try {
      const sql = 'SELECT * FROM productcomment WHERE prodid =$1';
      // @ts-ignore
      const conn = await pool.connect();
      const result = await conn.query(sql, [id]);
      conn.release();

      if (result.rowCount) {
        return result.rows;
      }
      return false;
    } catch (err) {
      throw new Error(`Could not find product with ${id}. Error: ${err}`);
    }
  }

  async newclothes(cat: string): Promise<product | boolean> {
    try {
      const sql = 'SELECT * FROM products WHERE category=($1)';
      // @ts-ignore
      const conn = await pool.connect();
      const result = await conn.query(sql, [cat]);
      conn.release();

      if (result.rowCount) {
        
        return result.rows;
      }
      return false;
    } catch (err) {
      
      throw new Error(` Error: ${err}`);
    }
  }

  async getproductstars(id: string): Promise<prodComment | boolean> {
    try {
      const sql =
        'select sum(stars) as sumstar , count(stars) as numstar from productcomment where prodid=($1)';
      // @ts-ignore
      const conn = await pool.connect();

      const result = await conn.query(sql, [id]);

      conn.release();

      if (result.rowCount) {
        return result.rows;
      }
      return false;
    } catch (err) {
      throw new Error(` Error: ${err}`);
    }
  }
}
