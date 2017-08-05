import assignStyle from 'css-in-js-utils/lib/assignStyle';
import { arrayReduce } from 'fela-utils';

export default function combineRules() {
  for (var _len = arguments.length, rules = Array(_len), _key = 0; _key < _len; _key++) {
    rules[_key] = arguments[_key];
  }

  return function (props, renderer) {
    return arrayReduce(rules, function (style, rule) {
      return assignStyle(style, rule(props, renderer));
    }, {});
  };
}