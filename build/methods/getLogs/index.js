"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _axios = _interopRequireDefault(require("axios"));
var _constants = require("../../constants");
var _utils = require("../../utils");
var getLogs = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(key, accessToken) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _axios["default"].get(_constants.endPoints.getLogs(key), {
            headers: {
              "x-access-token": accessToken
            }
          }).then(_utils.prepareResponse);
        case 2:
          return _context.abrupt("return", _context.sent);
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getLogs(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var _default = getLogs;
exports["default"] = _default;
//# sourceMappingURL=index.js.map