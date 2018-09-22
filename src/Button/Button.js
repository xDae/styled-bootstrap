// @flow

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import themeProp from '../utils/theme';

import { boxShadow } from '../utils/box-shadow';
import { hover, hoverFocus } from '../utils/hover';
import { transition } from '../utils/transition';

import { buttonVariant } from './utils/button-variant';
import { buttonSize } from './utils/button-size';
import { buttonOutlineVariant } from './utils/button-outline-variant';

import * as defaultTheme from './defaultTheme';

const {
  enableShadows,
  btnBoxShadow,
  btnBorderWidth,
  btnFocusBoxShadow,
  btnDisabledOpacity,
  btnPaddingY,
  btnPaddingX,
  fontSizeBase,
  btnLineHeight,
  btnBorderRadius,
  btnPaddingYlg,
  btnPaddingXlg,
  fontSizeLg,
  btnLineHeightLg,
  btnBorderRadiusLg,
  btnPaddingYsm,
  btnPaddingXsm,
  fontSizeSm,
  btnLineHeightSm,
  btnBorderRadiusSm,
  btnTransition
} = defaultTheme;

const Button = styled.button`
  display: ${({ block }) => (block ? 'block' : 'inline-block')};
  width: ${({ block }) => block && '100%'};
  font-weight: ${themeProp('btnFontWeight')};
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: ${themeProp('btnBorderWidth', btnBorderWidth)} solid transparent;

  ${transition(themeProp('btnTransition', btnTransition))};

  /* Share hover and focus styles */
  ${hoverFocus('text-decoration: none;')};

  &:focus,
  &.focus {
    outline: 0;
    box-shadow: ${themeProp('btnFocusBoxShadow', btnFocusBoxShadow)};
  }

  &.disabled,
  &:disabled {
    opacity: ${themeProp('btnDisabledOpacity', btnDisabledOpacity)};
    ${boxShadow('none')};
  }

  /* Opinionated: add "hand" cursor to non-disabled .btn elements */
  &:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  ${({ theme, color }) =>
    color !== 'link' &&
    buttonVariant(
      theme[color] || defaultTheme[color],
      theme[color] || defaultTheme[color],
      theme.enableShadows || enableShadows,
      theme.btnBoxShadow || btnBoxShadow,
      theme.btnActiveBoxShadow
    )};

  ${({ color }) =>
    color === 'link' &&
    css`
      font-weight: ${themeProp('fontWeightNormal', 'normal')};
      color: ${themeProp('linkColor', '#007bff')};
      background-color: transparent;



      ${hover(css`
        color: ${themeProp('linkHoverColor', '#0056b3')};
        text-decoration: ${themeProp('linkHoverDecoration', 'underline')};
        background-color: transparent;
        border-color: transparent;
      `)};

      &:focus,
      &.focus {
        text-decoration: ${themeProp('linkHoverDecoration', 'underline')};
        border-color: transparent;
        box-shadow: none;
      }

      &:disabled,
      &.disabled {
        color: text-decoration: ${themeProp('btnLinkDisabledColor', '#6c757d')};
      }
    `};

  ${({ theme, outline, color }) =>
    outline && buttonOutlineVariant(theme[color] || defaultTheme[color])};

  ${({ size, theme }) =>
    size === 'normal' &&
    buttonSize(
      themeProp('btnPaddingY', btnPaddingY),
      themeProp('btnPaddingX', btnPaddingX),
      themeProp('fontSizeBase', fontSizeBase),
      themeProp('btnLineHeight', btnLineHeight),
      typeof theme.enableRounded === 'undefined'
        ? themeProp('btnBorderRadius', btnBorderRadius)
        : 0
    )};

  ${({ size, theme }) =>
    size === 'small' &&
    buttonSize(
      themeProp('btnPaddingYsm', btnPaddingYsm),
      themeProp('btnPaddingXsm', btnPaddingXsm),
      themeProp('fontSizeSm', fontSizeSm),
      themeProp('btnLineHeightSm', btnLineHeightSm),
      typeof theme.enableRounded === 'undefined'
        ? themeProp('btnBorderRadiusSm', btnBorderRadiusSm)
        : 0
    )};

  ${({ size, theme }) =>
    size === 'large' &&
    buttonSize(
      themeProp('btnPaddingYlg', btnPaddingYlg),
      themeProp('btnPaddingXlg', btnPaddingXlg),
      themeProp('fontSizeLg', fontSizeLg),
      themeProp('btnLineHeightLg', btnLineHeightLg),
      typeof theme.enableRounded === 'undefined'
        ? themeProp('btnBorderRadiusLg', btnBorderRadiusLg)
        : 0
    )};

  ${({ active }) =>
    active &&
    css`
      background-image: none;
      ${boxShadow(themeProp('btnFocusBoxShadow', btnFocusBoxShadow))};
    `};
`;

// Button.Link = Button.withComponent('a');

Button.defaultProps = {
  active: false,
  block: false,
  color: 'primary',
  size: 'normal',
  outline: false
};

Button.propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.string,
  outline: PropTypes.bool
};

export default Button;
