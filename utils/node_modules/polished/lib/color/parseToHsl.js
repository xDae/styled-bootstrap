'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parseToRgb = require('./parseToRgb');

var _parseToRgb2 = _interopRequireDefault(_parseToRgb);

var _rgbToHsl = require('../internalHelpers/_rgbToHsl');

var _rgbToHsl2 = _interopRequireDefault(_rgbToHsl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns an HslColor or HslaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a HslColor or HslaColor object back to a string.
 *
 * @example
 * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
 * const color1 = 'rgb(255, 0, 0)';
 * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
 * const color2 = 'hsla(210, 10%, 40%, 0.75)';
 */
function parseToHsl(color) {
  // Note: At a later stage we can optimize this function as right now a hsl
  // color would be parsed converted to rgb values and converted back to hsl.
  return (0, _rgbToHsl2.default)((0, _parseToRgb2.default)(color));
}

exports.default = parseToHsl;
module.exports = exports['default'];