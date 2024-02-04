'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const user_1 = require('../model/user');
const signtoken_1 = __importDefault(require('../authorization/signtoken'));
const userobject = new user_1.User();
class Usercontroller {
  constructor() {
    this.index = async (_req, res) => {
      try {
        const allusers = await userobject.index();
        res.json(allusers);
      } catch (e) {
        res.status(400);
        res.json({ status: 'fail' });
      }
    };
    this.show = async (req, res) => {
      try {
        const userbyid = await userobject.show(req.params.id);
        res.json(userbyid);
      } catch (err) {
        res.status(400);
        res.json({ status: 'fail' });
      }
    };
    this.delete = async (req, res) => {
      try {
        const deleted = await userobject.deleteuser(req.params.id);
        res.json(deleted);
      } catch (err) {
        res.status(400);
        res.json({ status: 'fail' });
      }
    };
    this.update = async (req, res) => {
      try {
        const updated = await userobject.updateuser(
          req.body.firstname,
          req.body.lastname,
          req.body.password,
          req.body.id
        );
        res.json(updated);
      } catch (err) {
        res.status(400);
        res.json({ status: 'fail' });
      }
    };
    this.getuserbycredentials = async (req, res) => {
      try {
        // by consider that username in system is unique
        const userbyusername = await userobject.getuserbycredentials(
          req.body.username,
          req.body.password
        );
        if (userbyusername) {
          res.json(userbyusername);
        } else {
          res.status(404);
          res.json({ error: 'user not found or password wrong' });
        }
      } catch (err) {
        res.status(400);
        res.json({ status: 'fail' });
      }
    };
    this.create = async (req, res) => {
      try {
        const userquery = {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          upassword: req.body.password
        };
        const newuser = await userobject.create(userquery);
        const token = await (0, signtoken_1.default)(newuser);
        res.json({ user: newuser, credential: token });
      } catch (err) {
        res.status(400);
        res.json({ status: 'fail' });
      }
    };
  }
}
exports.default = Usercontroller;
