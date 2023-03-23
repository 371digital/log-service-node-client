"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _constants = require("../../constants");
var _utils = require("../../utils");
var _axios = _interopRequireDefault(require("axios"));
var createLog = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref, accessToken) {
    var key, log;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          key = _ref.key, log = _ref.log;
          _context.next = 3;
          return _axios["default"].post(_constants.endPoints.createLog, {
            key: key,
            log: log
          }, {
            headers: {
              "x-access-token": accessToken
            }
          }).then(_utils.prepareResponse);
        case 3:
          return _context.abrupt("return", _context.sent);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function createLog(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();
var _default = createLog;
exports["default"] = _default;
//# sourceMappingURL=index.js.map