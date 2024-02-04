'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.User = void 0;
// @ts-ignore
const db_1 = __importDefault(require('../database_connection/db'));
const bcrypt_1 = __importDefault(require('../authentication/bcrypt'));
const dotenv_1 = __importDefault(require('dotenv'));
dotenv_1.default.config();
const cipher = new bcrypt_1.default();
class User {
  async index() {
    try {
      // @ts-ignore
      const conn = await db_1.default.connect();
      const sql = 'SELECT * FROM users';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Could not get users. Error: ${err}`);
    }
  }
  async show(id) {
    try {
      const sql = 'SELECT * FROM users WHERE id=($1)';
      // @ts-ignore
      const conn = await db_1.default.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find user with ${id}. Error: ${err}`);
    }
  }
  async deleteuser(id) {
    try {
      const sql = 'delete FROM users WHERE id=($1)';
      // @ts-ignore
      const conn = await db_1.default.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Could not delete user with ${id}. Error: ${err}`);
    }
  }
  async updateuser(firstname, lastname, password, id) {
    try {
      const sql =
        'UPDATE users SET firstname=($1), lastname=($2), upassword=($3) WHERE id=($4)';
      // @ts-ignore
      const conn = await db_1.default.connect();
      const result = await conn.query(sql, [firstname, lastname, password, id]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Could not update user with ${id}. Error: ${err}`);
    }
  }
  async getuserbycredentials(username, password) {
    try {
      // by consider that username in system is unique
      const sql = 'SELECT * FROM users WHERE firstName=($1)';
      // @ts-ignore
      const conn = await db_1.default.connect();
      const result = await conn.query(sql, [username]);
      conn.release();
      if (result.rows.length) {
        const userdata = result.rows[0];
        if (await cipher.decrypt(userdata.upassword, password)) {
          return userdata;
        }
      }
      return null;
    } catch (err) {
      throw new Error(` Error: ${err}`);
    }
  }
  async create(u) {
    try {
      const sql =
        'INSERT INTO users (firstName,lastName,Upassword) VALUES ($1, $2, $3) RETURNING *';
      // @ts-ignore
      const conn = await db_1.default.connect();
      const hash = await cipher.encrypt(u);
      const result = await conn.query(sql, [u.firstname, u.lastname, hash]);
      const user = result.rows[0];
      conn.release();
      return user;
    } catch (err) {
      throw new Error(`Could not add new User`);
    }
  }
}
exports.User = User;
