import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import {
  buttonVariant,
  buttonSize,
  buttonOutlineVariant
} from '../../utils/button';

import { hoverFocus } from '../../utils/hover';
import { transition } from '../../utils/transition';

import * as defaults from '../../defaultTheme';

const btnDefaults = {
  btnFontWeight: 'normal',
  btnLineHeight: '1.25',
  inputBtnBorderWidth: '1px',
  btnPaddingY: '0.5rem',
  btnPaddingX: '1rem',
  btnBorderRadius: '0.25rem',
  btnTransition: 'all .2s ease-in-out',
  btnFocusBoxShadow: '0 0 0 2px rgba($brand-primary, .25)',
  btnActiveBoxShadow: 'inset 0 3px 5px rgba($black,.125)',
  cursorDisabled: 'not-allowed',
};

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

const StyledButton = styled.button`
  display: inline-block;
  font-weight: ${btnDefaults.btnFontWeight};
  line-height: ${btnDefaults.btnLineHeight};
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: ${btnDefaults.inputBtnBorderWidth} solid transparent;

  ${buttonSize(btnDefaults.btnPaddingY, btnDefaults.btnPaddingX, defaults.fontSizeBase, btnDefaults.btnBorderRadius)};
  ${transition(btnDefaults.btnTransition)};

  // Share hover and focus styles
  ${hoverFocus(css`
    text-decoration: none;
  `)}

  &:focus,
  &.focus {
    outline: 0;
    box-shadow: ${btnDefaults.btnFocusBoxShadow};
  }

  // Disabled comes first so active can properly restyle
  &.disabled,
  &:disabled {
    cursor: ${btnDefaults.cursorDisabled};
    opacity: .65;
    // @include box-shadow(none);
  }

  &:active,
  &.active {
    background-image: none;
    // @include box-shadow(${btnDefaults.btnFocusBoxShadow}, ${btnDefaults.btnActiveBoxShadow});
  }

  // Alternate buttons
  ${props => {
    switch(props.type) {
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
      switch(props.type) {
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
`;

class Button extends Component {
  render() {
    return <StyledButton {...this.props}>{this.props.children}</StyledButton>;
  }
}

export default Button;
