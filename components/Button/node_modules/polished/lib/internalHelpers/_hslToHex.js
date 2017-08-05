'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hslToRgb = require('./_hslToRgb');

var _hslToRgb2 = _interopRequireDefault(_hslToRgb);

var _reduceHexValue = require('./_reduceHexValue');

var _reduceHexValue2 = _interopRequireDefault(_reduceHexValue);

var _numberToHex = require('./_numberToHex');

var _numberToHex2 = _interopRequireDefault(_numberToHex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function colorToHex(color) {
  return (0, _numberToHex2.default)(Math.round(color * 255));
}

function convertToHex(red, green, blue) {
  return (0, _reduceHexValue2.default)('#' + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}

function hslToHex(hue, saturation, lightness) {
  return (0, _hslToRgb2.default)(hue, saturation, lightness, convertToHex);
}

exports.default = hslToHex;
module.exports = exports['default'];