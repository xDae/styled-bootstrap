import React from 'react';
import styled, { css } from 'styled-components';

import {
  buttonVariant,
  buttonSize,
  buttonOutlineVariant
} from '../../utils/button';

import { hoverFocus } from '../../utils/hover';
import { transition } from '../../utils/transition';
import { boxShadow } from '../../utils/box-shadow';

import * as defaults from '../../defaultTheme';

const btnPrimaryColor = '#fff';
const btnPrimaryBg = '#0275d8';
const btnPrimaryBorder = '#0275d8';

const btnSecondaryColor = defaults.grayDark;
const btnSecondaryBg = defaults.white;
const btnSecondaryBorder = '#ccc';

const btnInfoColor = defaults.white;
const btnInfoBg = defaults.brandInfo;
const btnInfoBorder = btnInfoBg;

const btnSuccessColor = defaults.white;
const btnSuccessBg = defaults.brandSuccess;
const btnSuccessBorder = btnSuccessBg;

const btnWarningColor = defaults.white;
const btnWarningBg = defaults.brandWarning;
const btnWarningBorder = btnWarningBg;

const btnDangerColor = defaults.white;
const btnDangerBg = defaults.brandDanger;
const btnDangerBorder = btnDangerBg;

const btnPaddingXsm = '.5rem';
const btnPaddingYsm = '.25rem';

const btnPaddingXlg = '1.5rem';
const btnPaddingYlg = '.75rem';

const btnBorderRadius = defaults.borderRadius;
const btnBorderRadiusLg = defaults.borderRadiusLg;
const btnBorderRadiusSm = defaults.borderRadiusSm;

const StyledButtonsa = styled.button.attrs({
  btnFontWeight: props => props.theme.btnFontWeight || 'normal',
  btnLineHeight: props => props.theme.btnLineHeight || 1.25,
  inputBtnBorderWidth: props => props.theme.inputBtnBorderWidth || '1px',
  btnPaddingY: props => props.theme.btnPaddingY || '0.5rem',
  btnPaddingX: props => props.theme.btnPaddingX || '1rem',
  btnBorderRadius: props => props.theme.btnBorderRadius || '0.25rem',
  btnTransition: props => props.theme.btnTransition || 'all .2s ease-in-out',
  btnFocusBoxShadow: props => props.theme.btnFocusBoxShadow || `0 0 0 2px rgba(${defaults.brandPrimary}, 0.25)`,
  btnActiveBoxShadow: props => props.theme.btnActiveBoxShadow || `inset 0 3px 5px rgba(${defaults.black}, 0.125)`,
  cursorDisabled: props => props.theme.cursorDisabled || 'not-allowed',
})`
  display: inline-block;
  font-weight: ${props => props.btnFontWeight};
  line-height: ${props => props.btnLineHeight};
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: ${props => props.inputBtnBorderWidth} solid transparent;

  ${props => buttonSize(props.btnPaddingY, props.btnPaddingX, props.theme.fontSizeBase || '1rem', btnBorderRadius)};
  ${props => transition(props.btnTransition)};

  // Share hover and focus styles
  ${hoverFocus(css`
    text-decoration: none;
  `)}

  &:focus,
  &.focus {
    outline: 0;
    box-shadow: ${props => props.btnFocusBoxShadow};
  }

  // Disabled comes first so active can properly restyle
  &.disabled,
  &:disabled {
    cursor: ${props => props.cursorDisabled};
    opacity: .65;
    // @include box-shadow(none);
  }

  // Alternate buttons
  ${props => {
    switch(props.color) {
      case 'primary':
        return buttonVariant(btnPrimaryColor, btnPrimaryBg, btnPrimaryBorder);
      case 'secondary':
        return buttonVariant(btnSecondaryColor, btnSecondaryBg, btnSecondaryBorder);
      case 'info':
        return buttonVariant(btnInfoColor, btnInfoBg, btnInfoBorder);
      case 'success':
        return buttonVariant(btnSuccessColor, btnSuccessBg, btnSuccessBorder);
      case 'warning':
        return buttonVariant(btnWarningColor, btnWarningBg, btnWarningBorder);
      case 'danger':
        return buttonVariant(btnDangerColor, btnDangerBg, btnDangerBorder);
      default:
        return null;
    }
  }}

  ${props => {
    if (props.outline) {
      switch(props.color) {
        case 'primary':
          return buttonOutlineVariant(btnPrimaryBg);
        case 'secondary':
          return buttonOutlineVariant(btnSecondaryBorder);
        case 'info':
          return buttonOutlineVariant(btnInfoBg);
        case 'success':
          return buttonOutlineVariant(btnSuccessBg);
        case 'warning':
          return buttonOutlineVariant(btnWarningBg);
        case 'danger':
          return buttonOutlineVariant(btnDangerBg);
        default:
          return null;
      }
    }
  }}

  ${props => {
    switch(props.size) {
      case 'large':
        return buttonSize(btnPaddingYlg, btnPaddingXlg, defaults.fontSizeLg, btnBorderRadiusLg);
      case 'small':
        return buttonSize(btnPaddingYsm, btnPaddingXsm, defaults.fontSizeSm, btnBorderRadiusSm);
      default:
        return null;
    }
  }}

  ${props => props.active && css`
    background-image: none;
    // ${boxShadow(props.btnFocusBoxShadow)}
  `}
`;

const ButtonV2 = props => <StyledButtonsa {...props}>{props.children}</StyledButtonsa>;

export default ButtonV2;
