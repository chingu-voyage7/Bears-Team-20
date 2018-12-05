

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

let _mongoose = _interopRequireDefault(require('mongoose'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_mongoose.default.Promise = global.Promise;

async function startDB() {
  try {
    await _mongoose.default.connect(
      process.env.MONGODB_URI,
      {
        useNewUrlParser: true,
      },
    );
    console.log('DB running');
  } catch (e) {
    console.log(`DB_ERROR: ${e}`);
  }
}

startDB();
let _default = _mongoose.default;
exports.default = _default;
