// @flow

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import get from 'lodash.get';

import themeProp from '../utils/theme';

import { borderRadius } from '../utils/border-radius';

import { transition } from '../utils/transition';
import { formControlFocus } from '../utils/forms';

import {
  inputPaddingY,
  inputPaddingX,
  fontSizeBase,
  fontSizeSm,
  fontSizeLg,
  inputLineHeight,
  inputPaddingYsm,
  inputPaddingXsm,
  inputLineHeightSm,
  inputPaddingYlg,
  inputPaddingXlg,
  inputLineHeightLg,
  inputBg,
  inputDisabledBg,
  inputColor,
  inputBorderColor,
  inputBorderWidth,
  inputBoxShadow,
  inputBorderRadius,
  inputBorderRadiusLg,
  inputBorderRadiusSm,
  inputPlaceholderColor,
  inputTransition,
  inputFocusColor,
  inputFocusBg,
  inputFocusBorderColor,
  inputFocusBoxShadow
} from './default-theme';

const Input = styled.input`
  display: block;
  width: 100%;
  padding: ${themeProp('inputPaddingY', inputPaddingY)}
    ${themeProp('inputPaddingX', inputPaddingX)};
  font-size: ${themeProp('fontSizeBase', fontSizeBase)};
  line-height: ${themeProp('inputLineHeight', inputLineHeight)};
  color: ${themeProp('inputColor', inputColor)};
  background-color: ${themeProp('inputBg', inputBg)};
  background-image: none;
  background-clip: padding-box;
  border: ${themeProp('inputBorderWidth', inputBorderWidth)} solid
    ${themeProp('inputBorderColor', inputBorderColor)};

  ${({ theme }) =>
    typeof theme.enableRounded === 'undefined' || theme.enableRounded
      ? `border-radius: ${get(theme, 'inputBorderRadius', inputBorderRadius)};`
      : 'border-radius: 0;'}

  ${({ theme }) =>
    (typeof theme.enableShadows === 'undefined' || theme.enableShadows) &&
    `box-shadow: ${get(theme, 'inputBoxShadow', inputBoxShadow)};`};

  ${transition(themeProp('inputTransition', inputTransition))}

  &::-ms-expand {
    background-color: transparent;
    border: 0;
  }

  ${formControlFocus(
    themeProp('inputFocusColor', inputFocusColor),
    themeProp('inputFocusBg', inputFocusBg),
    themeProp('inputFocusBorderColor', inputFocusBorderColor)
  )};

  ${({ theme }) => css`
    &:focus {
      ${typeof theme.enableShadows === 'undefined' || theme.enableShadows
        ? `box-shadow: ${get(theme, 'inputBoxShadow', inputBoxShadow)}, ${get(
            theme,
            'inputFocusBoxShadow',
            inputFocusBoxShadow
          )};`
        : `box-shadow: ${get(
            theme,
            'inputFocusBoxShadow',
            inputFocusBoxShadow
          )};`};
    }
  `};

  &::placeholder {
    color: ${themeProp('inputPlaceholderColor', inputPlaceholderColor)};
    opacity: 1;
  }

  ${props =>
    props.disabled &&
    css`
      background-color: ${themeProp('inputDisabledBg', inputDisabledBg)};
      opacity: 1;
    `}

  ${({ size, theme }) =>
    size === 'small' &&
    css`
      padding: ${themeProp('inputPaddingYsm', inputPaddingYsm)}
        ${themeProp('inputPaddingXsm', inputPaddingXsm)};
      font-size: ${themeProp('fontSizeSm', fontSizeSm)};
      line-height: ${themeProp('inputLineHeightSm', inputLineHeightSm)};
      ${(typeof theme.enableRounded === 'undefined' || theme.enableRounded) &&
        borderRadius(themeProp('inputBorderRadiusSm', inputBorderRadiusSm))};
    `}

  ${({ size, theme }) =>
    size === 'large' &&
    css`
      padding: ${themeProp('inputPaddingYlg', inputPaddingYlg)}
        ${themeProp('inputPaddingXlg', inputPaddingXlg)};
      font-size: ${themeProp('fontSizeLg', fontSizeLg)};
      line-height: ${themeProp('inputLineHeightLg', inputLineHeightLg)};
      ${(typeof theme.enableRounded === 'undefined' || theme.enableRounded) &&
        borderRadius(themeProp('inputBorderRadiusLg', inputBorderRadiusLg))};
    `};
`;

Input.defaultProps = {
  size: 'normal'
};

Input.defaultProps = {
  size: PropTypes.oneOf(['normal', 'small', 'large'])
};

export default Input;
