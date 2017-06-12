// flow

import styled, { css } from 'styled-components';

import { borderRadius } from '../../utils/border-radius';

import { transition } from '../../utils/transition';
import { boxShadow } from '../../utils/box-shadow';
import { formControlFocus } from '../../utils/forms';

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
  inputBtnPaddingYsm,
  inputBtnPaddingXsm,
  fontSizeSm,
  inputBtnLineHeightSm,
  inputBorderRadiusSm,
  inputBtnPaddingYlg,
  inputBtnPaddingXlg,
  fontSizeLg,
  inputBtnLineHeightLg,
  inputBorderRadiusLg
} from '../../defaultTheme';

const Input = styled.input`
  display: block;
  width: 100%;
  ${props =>
    `padding: ${props.theme.inputBtnPaddingY} ${props.theme.inputBtnPaddingX};`}
  font-size: ${props => props.theme.fontSizeBase};
  line-height: ${props => props.theme.inputBtnLineHeight};
  color: ${props => props.theme.inputColor};
  background-color: ${props => props.theme.inputBg};

  background-image: none;
  background-clip: padding-box;
  ${props =>
    `border: ${props.theme.inputBtnBorderWidth} solid ${props.theme
      .inputBorderColor};`}

  ${props =>
    props.theme.enableRounded
      ? `border-radius: ${props.theme.inputBorderRadius};`
      : 'border-radius: 0;'}

  ${props => boxShadow(props.theme.inputBoxShadow)}
  ${props => transition(props.theme.inputTransition)}

  &::-ms-expand {
    background-color: transparent;
    border: 0;
  }

  ${formControlFocus()}

  &::placeholder {
    color: ${props => props.theme.inputColorPlaceholder};
    opacity: 1;
  }

  ${props =>
    props.disabled &&
    css`
      background-color: ${props.theme.inputBgDisabled};
      opacity: 1;
    `}

  ${props =>
    props.size === 'small' &&
    css`
      padding: ${props.theme.inputBtnPaddingYsm} ${props.theme
      .inputBtnPaddingXsm};
      font-size: ${props.theme.fontSizeSm};
      line-height: ${props.theme.inputBtnLineHeightSm};
      ${borderRadius(props.theme.inputBorderRadiusSm)}
    `}

  ${props =>
    props.size === 'large' &&
    css`
      padding: ${props.theme.inputBtnPaddingYlg} ${props.theme
      .inputBtnPaddingXlg};
      font-size: ${props.theme.fontSizeLg};
      line-height: ${props.theme.inputBtnLineHeightLg};
      ${borderRadius(props.theme.inputBorderRadiusLg)}
    `}}
`;

Input.defaultProps = {
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
    inputBtnPaddingYsm,
    inputBtnPaddingXsm,
    fontSizeSm,
    inputBtnLineHeightSm,
    inputBorderRadiusSm,
    inputBtnPaddingYlg,
    inputBtnPaddingXlg,
    fontSizeLg,
    inputBtnLineHeightLg,
    inputBorderRadiusLg
  }
};

export default Input;
