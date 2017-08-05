"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

exports.default = numberToHex;
module.exports = exports["default"];