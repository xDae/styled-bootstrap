// @flow

import themeProp from '../utils/theme';

import Input from './Input';

import {
  inputColor,
  inputBg,
  inputHeight,
  inputHeightSm,
  inputHeightLg
} from './default-theme';

const Select = Input.withComponent('select').extend`
  &:not([size]):not([multiple]) {
    ${props => {
      switch (props.size) {
        case 'small':
          return `height: ${themeProp('inputHeight', inputHeightSm)};`;
        case 'large':
          return `height: ${themeProp('inputHeight', inputHeightLg)};`;
        default:
          return `height: ${themeProp('inputHeight', inputHeight)};`;
      }
    }}

  }

  &:focus::-ms-value {
    color: ${themeProp('inputColor', inputColor)};
    background-color: ${themeProp('inputBg', inputBg)};
  };
`;

export default Select;
