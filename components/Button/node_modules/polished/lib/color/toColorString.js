'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _rgb = require('./rgb');

var _rgb2 = _interopRequireDefault(_rgb);

var _rgba = require('./rgba');

var _rgba2 = _interopRequireDefault(_rgba);

var _hsl = require('./hsl');

var _hsl2 = _interopRequireDefault(_hsl);

var _hsla = require('./hsla');

var _hsla2 = _interopRequireDefault(_hsla);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isRgb = function isRgb(color) {
  return (typeof color === 'undefined' ? 'undefined' : _typeof(color)) === 'object' && typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' &&
  // $FlowIgnoreNextLine not sure why this complains
  typeof color.alpha !== 'number';
};

var isRgba = function isRgba(color) {
  return (typeof color === 'undefined' ? 'undefined' : _typeof(color)) === 'object' && typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' &&
  // $FlowIgnoreNextLine not sure why this complains
  typeof color.alpha === 'number';
};

var isHsl = function isHsl(color) {
  return (typeof color === 'undefined' ? 'undefined' : _typeof(color)) === 'object' && typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' &&
  // $FlowIgnoreNextLine not sure why this complains
  typeof color.alpha !== 'number';
};

var isHsla = function isHsla(color) {
  return (typeof color === 'undefined' ? 'undefined' : _typeof(color)) === 'object' && typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' &&
  // $FlowIgnoreNextLine not sure why this complains
  typeof color.alpha === 'number';
};

/**
 * Converts a RgbColor, RgbaColor, HslColor or HslaColor object to a color string.
 * This util is useful in case you only know on runtime which color object is
 * used. Otherwise we recommend to rely on `rgb`, `rgba`, `hsl` or `hsla`.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: toColorString({ red: 255, green: 205, blue: 100 }),
 *   background: toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 }),
 *   background: toColorString({ hue: 240, saturation: 1, lightness: 0.5 }),
 *   background: toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${toColorString({ red: 255, green: 205, blue: 100 })};
 *   background: ${toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 })};
 *   background: ${toColorString({ hue: 240, saturation: 1, lightness: 0.5 })};
 *   background: ${toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 })};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#ffcd64";
 *   background: "rgba(255,205,100,0.72)";
 *   background: "#00f";
 *   background: "rgba(179,25,25,0.72)";
 * }
 */
function toColorString(color) {
  if (isRgba(color)) {
    // $FlowIgnoreNextLine not sure why this complains
    return (0, _rgba2.default)(color);
  } else if (isRgb(color)) {
    // $FlowIgnoreNextLine not sure why this complains
    return (0, _rgb2.default)(color);
  } else if (isHsla(color)) {
    // $FlowIgnoreNextLine not sure why this complains
    return (0, _hsla2.default)(color);
  } else if (isHsl(color)) {
    // $FlowIgnoreNextLine not sure why this complains
    return (0, _hsl2.default)(color);
  }
  throw new Error('Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.');
}

exports.default = toColorString;
module.exports = exports['default'];