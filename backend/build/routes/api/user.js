'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const user_1 = __importDefault(require('../../controller/user'));
const jwtmiddelware_1 = __importDefault(
  require('../../authorization/middelware/jwtmiddelware')
);
const user_2 = __importDefault(require('../../controller/services/user'));
const usercontroller = new user_1.default();
const usercontrollerservices = new user_2.default();
const users = express_1.default.Router();
users.get('/', jwtmiddelware_1.default, usercontroller.index);
users.get(
  '/:userid/purchases',
  jwtmiddelware_1.default,
  usercontrollerservices.userpurchases
);
users.get('/:id', jwtmiddelware_1.default, usercontroller.show);
users.delete('/delete/:id', jwtmiddelware_1.default, usercontroller.delete);
users.put('/update', jwtmiddelware_1.default, usercontroller.update);
users.post('/login', usercontroller.getuserbycredentials);
users.post('/', usercontroller.create);
exports.default = users;
