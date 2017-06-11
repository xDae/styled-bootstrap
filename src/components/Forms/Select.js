import { stripUnit } from 'polished';

import Input from './Input';

import {
  inputBtnPaddingY,
  inputBtnPaddingX,
  fontSizeBase,
  inputBtnLineHeight,
  inputColor,
  inputBg,
  inputBtnBorderWidth,
  inputBorderColor,
  enableRounded,
  inputBorderRadius,
  inputTransition,
  inputBoxShadow,
  inputColorPlaceholder,
  inputBgDisabled,
  inputHeight
} from '../../defaultTheme';

const Select = Input.withComponent('select').extend`
  &:not([size]):not([multiple]) {
    ${props =>
      `height: calc(${props.theme.inputHeight} + ${stripUnit(
        props.theme.inputBtnBorderWidth
      ) * 2}px);`}

  &:focus::-ms-value {
    // Suppress the nested default white text on blue background highlight given to
    // the selected option text when the (still closed) <select> receives focus
    // in IE and (under certain conditions) Edge, as it looks bad and cannot be made to
    // match the appearance of the native widget.
    // See https://github.com/twbs/bootstrap/issues/19398.
    color: ${props => props.theme.inputColor};
    background-color: ${props => props.theme.inputBg};
  }
`;

Select.defaultProps = {
  theme: {
    inputBtnPaddingY,
    inputBtnPaddingX,
    fontSizeBase,
    inputBtnLineHeight,
    inputColor,
    inputBg,
    inputBtnBorderWidth,
    inputBorderColor,
    enableRounded,
    inputBorderRadius,
    inputTransition,
    inputBoxShadow,
    inputColorPlaceholder,
    inputBgDisabled,
    inputHeight
  }
};

export default Select;
