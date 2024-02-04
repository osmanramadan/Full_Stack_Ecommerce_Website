'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const dotenv_1 = __importDefault(require('dotenv'));
const pg_1 = require('pg');
dotenv_1.default.config();
const {
  POSTGRES_HOST,
  DEV_POSTGRES_DB,
  TEST_POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  NODE_ENV
} = process.env;
let pool;
if (NODE_ENV === 'test') {
  pool = new pg_1.Pool({
    host: POSTGRES_HOST,
    database: TEST_POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD
  });
}
if (NODE_ENV === 'dev') {
  pool = new pg_1.Pool({
    host: POSTGRES_HOST,
    database: DEV_POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD || 'storefront'
  });
}
exports.default = pool;
