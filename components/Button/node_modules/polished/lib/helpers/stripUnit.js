"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Strip the unit from a given CSS value, returning just the number. (or the original value if an invalid string was passed)
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   '--dimension': stripUnit(100px)
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   --dimension: ${stripUnit(100px)}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   '--dimension': 100
 * }
 */

function stripUnit(value) {
  var unitlessValue = parseFloat(value);
  if (isNaN(unitlessValue)) return value;
  return unitlessValue;
}

exports.default = stripUnit;
module.exports = exports["default"];