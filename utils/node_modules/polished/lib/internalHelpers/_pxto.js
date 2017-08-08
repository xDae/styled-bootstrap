'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _endsWith = require('../internalHelpers/_endsWith');

var _endsWith2 = _interopRequireDefault(_endsWith);

var _stripUnit = require('../helpers/stripUnit');

var _stripUnit2 = _interopRequireDefault(_stripUnit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Factory function that creates pixel-to-x converters
 * @private
 */
var pxtoFactory = function pxtoFactory(to) {
  return function (pxval) {
    var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '16px';

    var newPxval = pxval;
    var newBase = base;
    if (typeof pxval === 'string') {
      if (!(0, _endsWith2.default)(pxval, 'px')) {
        throw new Error('Expected a string ending in "px" or a number passed as the first argument to ' + to + '(), got "' + pxval + '" instead.');
      }
      newPxval = (0, _stripUnit2.default)(pxval);
    }

    if (typeof base === 'string') {
      if (!(0, _endsWith2.default)(base, 'px')) {
        throw new Error('Expected a string ending in "px" or a number passed as the second argument to ' + to + '(), got "' + base + '" instead.');
      }
      newBase = (0, _stripUnit2.default)(base);
    }

    if (typeof newPxval === 'string') {
      throw new Error('Passed invalid pixel value ("' + pxval + '") to ' + to + '(), please pass a value like "12px" or 12.');
    }

    if (typeof newBase === 'string') {
      throw new Error('Passed invalid base value ("' + base + '") to ' + to + '(), please pass a value like "12px" or 12.');
    }

    return '' + newPxval / newBase + to;
  };
};

exports.default = pxtoFactory;
module.exports = exports['default'];