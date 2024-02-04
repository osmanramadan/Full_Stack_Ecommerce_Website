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
const verify = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;
    const token = authorizationHeader.split(' ')[1];
    jsonwebtoken_1.default.verify(token, TOKEN_SECRET);
    next();
  } catch (_a) {
    res.status(401);
    res.json({ access: 'forbidden' });
  }
};
exports.default = verify;
