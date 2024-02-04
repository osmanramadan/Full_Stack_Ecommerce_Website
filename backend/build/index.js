'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const body_parser_1 = __importDefault(require('body-parser'));
const express_1 = __importDefault(require('express'));
const cors_1 = __importDefault(require('cors'));
const routes_1 = __importDefault(require('./routes'));
const app = (0, express_1.default)();
const port = 4000;
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
};
app.use((0, cors_1.default)(corsOptions));
// parse application/x-www-form-urlencoded
app.use(body_parser_1.default.urlencoded({ extended: false }));
// this middelware convert json request to javascript object
app.use(body_parser_1.default.json());
app.use(routes_1.default);
app.listen(port, async () => {
  const url = `http://localhost:${port}`;
  console.log(` open ${url} to review the project ...`);
});
exports.default = app;
