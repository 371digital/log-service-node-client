"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serviceUrl = exports.endPoints = void 0;
var serviceUrl = "https://log-service.371digital.com";
exports.serviceUrl = serviceUrl;
var endPoints = {
  "createLog": "".concat(serviceUrl, "/createLog"),
  "getLogs": function getLogs(key) {
    return "".concat(serviceUrl, "/getLogs?key=").concat(key);
  }
};
exports.endPoints = endPoints;
//# sourceMappingURL=index.js.map