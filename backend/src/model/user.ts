// @ts-ignore
import pool from   '../database_connection/db';
import Cipher from '../authentication/bcrypt';
import dotenv from 'dotenv';
import { user , updateuserData } from '../types/user';

dotenv.config();



const cipher = new Cipher();
export class User {
  async index(): Promise<user[]> {
    try {
      // @ts-ignore
      const conn = await pool.connect();
      const sql = 'SELECT * FROM users';

      const result = await conn.query(sql);

      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Could not get users. Error: ${err}`);
    }
  }

  async show(id: string): Promise<user> {
    try {
      const sql = 'SELECT * FROM users WHERE id=($1)';
      // @ts-ignore
      const conn = await pool.connect();

      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find user with ${id}. Error: ${err}`);
    }
  }
  async deleteuser(id: string): Promise<[]> {
    try {
      const sql = 'delete FROM users WHERE id=($1)';
      // @ts-ignore
      const conn = await pool.connect();

      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Could not delete user with ${id}. Error: ${err}`);
    }
  }

  async getuserbycredentials(
    email: string,
    password: string
  ): Promise<user | null> {
    try {
      const sql = 'SELECT * FROM users WHERE email=($1)';
      // @ts-ignore
      const conn = await pool.connect();
      const result = await conn.query(sql, [email]);
      conn.release();
      if (result.rows.length) {
        const userdata: user = result.rows[0];
        if (await cipher.decrypt(userdata.password as string, password)) {
          return userdata;
        }
      }
      return null;
    } catch (err) {
      throw new Error(` Error: ${err}`);
    }
  }

  async getuserbyemail(email: string): Promise<any> {
    try {
      const sql = 'SELECT * FROM users WHERE email = $1';
      // @ts-ignore
      const conn = await pool.connect();
      const result = await conn.query(sql, [email]);
      conn.release();

      if (result.rows.length) {
        const userdata: User = result.rows[0];
        return userdata;
      }
      // return null;
    } catch (err) {
      throw new Error(`Error: ${err}`);
    }
  }

  async create(u: user): Promise<user> {
    try {
      const sql =
        'INSERT INTO users (email,username,password,phone) VALUES ($1, $2, $3,$4) RETURNING *';
      // @ts-ignore
      const conn = await pool.connect();
      const hash = await cipher.encrypt(u.password as string);
      const result = await conn.query(sql, [
        u.email,
        u.username,
        hash,
        u.phone
      ]);
      const user = result.rows[0];
      conn.release();

      return user;
    } catch (err) {
      throw new Error(`Could not add new User`);
    }
  }

  async emailExists(email: string): Promise<boolean> {
    try {
      const sql = 'SELECT EXISTS(SELECT 1 FROM users WHERE email = $1)';
      // @ts-ignore
      const conn = await pool.connect();

      const result = await conn.query(sql, [email]);
      conn.release();

      return result.rows[0].exists;
    } catch (err) {
      throw new Error(`Error while checking if email exists. Error: ${err}`);
    }
  }

  async phoneExists(phone: string): Promise<boolean> {
    try {
      const sql = 'SELECT EXISTS(SELECT 1 FROM users WHERE phone = $1)';
      // @ts-ignore
      const conn = await pool.connect();

      const result = await conn.query(sql, [phone]);
      conn.release();

      return result.rows[0].exists;
    } catch (err) {
      throw new Error(`Error while checking if phone exists. Error: ${err}`);
    }
  }

  async updateUserFields(data: updateuserData): Promise<boolean> {
    const { email, ...fieldsToUpdate } = data;
    const updateColumns = Object.keys(fieldsToUpdate);
    const updateValues = Object.values(fieldsToUpdate);

    if (updateColumns.length === 0) {
      throw new Error('No fields to update provided.');
    }
    try {
      const updateSetClauses = updateColumns
        .map((column, index) => `${column} = $${index + 2}`)
        .join(', ');
      const sql = `UPDATE users SET ${updateSetClauses} WHERE email = $1`;
      // @ts-ignore
      const conn = await pool.connect();
      const result = await conn.query(sql, [email, ...updateValues]);
      conn.release();
      return result.rowCount === 1;
    } catch (err) {
      throw new Error(`Error while updating user fields. Error: ${err}`);
    }
  }

  async checkResetCode(email: string, resetCode: string): Promise<string> {
    try {
      const sql_valid =
        'SELECT from users where email=$1 and passwordResetCode=$2';
      const sql_expire =
        'SELECT from users where email=$1 and passwordResetCode=$2 and passwordResetExpires > Now()';
      // @ts-ignore
      const conn = await pool.connect();
      const result = await conn.query(sql_valid, [email, resetCode]);
      conn.release();
      if (result.rowCount === 1) {
        const result_time = await conn.query(sql_expire, [email, resetCode]);
        if (result_time.rowCount === 1) {
          return 'valid code';
        } else {
          return 'expired code';
        }
      } else {
        return 'invalid code';
      }
    } catch (err) {
      throw new Error(`Error : ${err}`);
    }
  }

  async checkVerifyCode(email: string): Promise<boolean> {
    try {
      const sql = 'SELECT resetCodeVerified from users where email=$1';
      // @ts-ignore
      const conn = await pool.connect();
      const result = await conn.query(sql, [email]);
      conn.release();
      return result.rows[0].resetcodeverified === 'true';
    } catch (err) {
      throw new Error(`Error : ${err}`);
    }
  }

  async updateuserpassword(
    email: string,
    oldpassword: string,
    newpassword: string
  ): Promise<boolean> {
    try {
      const sql = 'SELECT password from users where email=$1';
      // @ts-ignore
      const conn = await pool.connect();
      const result = await conn.query(sql, [email]);
      conn.release();
      if (result.rowCount) {
        if (
          await cipher.decrypt(
            result.rows[0]['password'] as string,
            oldpassword
          )
        ) {
          const hash = await cipher.encrypt(newpassword as string);
          if (await this.updateUserFields({ email: email, password: hash })) {
            return true;
          }
        }
        return false;
      }
      return false;
    } catch (err) {
      throw new Error(`Error : ${err}`);
    }
  }
}
