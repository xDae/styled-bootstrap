// import { stripUnit } from 'polished';

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

const Textarea = Input.withComponent('textarea');

Textarea.defaultProps = {
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

export default Textarea;
