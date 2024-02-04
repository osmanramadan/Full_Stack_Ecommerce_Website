'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const dotenv_1 = __importDefault(require('dotenv'));
const bcrypt_1 = __importDefault(require('bcrypt'));
dotenv_1.default.config();
const pepper = process.env.BCRYPT_PASSWORD;
const salt = process.env.SALT_ROUNDS;
class Cipher {
  constructor() {
    this.encrypt = async u => {
      const hash = await bcrypt_1.default.hash(
        u.upassword + pepper,
        parseInt(salt)
      );
      return hash;
    };
    this.decrypt = async (hashed, password) => {
      try {
        const check = await bcrypt_1.default.compare(password + pepper, hashed);
        if (check) {
          return true;
        }
        return false;
      } catch (_a) {
        return false;
      }
    };
  }
}
exports.default = Cipher;
