'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const jsonwebtoken_1 = __importDefault(require('jsonwebtoken'));
const dotenv_1 = __importDefault(require('dotenv'));
dotenv_1.default.config();
const TOKEN_SECRET = process.env.TOKEN_SECRET;
const generatetoken = async u => {
  const token = jsonwebtoken_1.default.sign({ userinfo: u }, TOKEN_SECRET, {
    expiresIn: '15d'
  });
  return token;
};
exports.default = generatetoken;
