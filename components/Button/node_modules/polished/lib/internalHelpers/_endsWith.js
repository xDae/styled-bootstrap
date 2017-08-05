"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (string, suffix) {
  return string.substr(-suffix.length) === suffix;
};

module.exports = exports["default"];