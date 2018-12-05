"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("./configuration/mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const port = process.env.PORT || 3000;
app.use(_express.default.urlencoded({
  extended: false
}));
app.use(_express.default.json());
app.get("/", (req, res) => res.send("hello world"));
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
var _default = app;
exports.default = _default;