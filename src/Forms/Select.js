// @flow

import themeProp from '../utils/theme';

import Input from './Input';

import { inputColor, inputBg, inputHeight } from './default-theme';

const Select = Input.withComponent('select').extend`
  /* TODO: add small & large sizes */
  &:not([size]):not([multiple]) {
    height: ${themeProp('inputHeight', inputHeight)};
  }

  &:focus::-ms-value {
    // Suppress the nested default white text on blue background highlight given to
    // the selected option text when the (still closed) <select> receives focus
    // in IE and (under certain conditions) Edge, as it looks bad and cannot be made to
    // match the appearance of the native widget.
    // See https://github.com/twbs/bootstrap/issues/19398.
    color: ${themeProp('inputColor', inputColor)};
    background-color: ${themeProp('inputBg', inputBg)};
  }
`;

Select.defaultProps = {};

export default Select;
