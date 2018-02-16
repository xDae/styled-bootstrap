// @flow

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import themeProp from '../utils/src/theme';

import { boxShadow } from '../utils/src/box-shadow';
import { hover, hoverFocus } from '../utils/src/hover';
import { transition } from '../utils/src/transition';

import { buttonVariant } from './utils/button-variant';
import { buttonSize } from './utils/button-size';
import { buttonOutlineVariant } from './utils/button-outline-variant';

import {
  colors,
  enableShadows,
  enableRounded,
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
} from './defaultTheme';

const Button = styled.button`
  display: ${({ block }) => (block ? 'block' : 'inline-block')};
  width: ${props => props.block && '100%'};
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
      theme[color] || colors[color],
      theme[color] || colors[color],
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
    outline && buttonOutlineVariant(theme[color] || colors[color])};

  ${({ size, theme }) =>
    size === 'normal' &&
    buttonSize(
      themeProp('btnPaddingY', btnPaddingY),
      themeProp('btnPaddingX', btnPaddingX),
      themeProp('fontSizeBase', fontSizeBase),
      themeProp('btnLineHeight', btnLineHeight),
      (theme.enableRounded || enableRounded) &&
        themeProp('btnBorderRadius', btnBorderRadius)
    )};

  ${({ size, theme }) =>
    size === 'small' &&
    buttonSize(
      themeProp('btnPaddingYsm', btnPaddingYsm),
      themeProp('btnPaddingXsm', btnPaddingXsm),
      themeProp('fontSizeSm', fontSizeSm),
      themeProp('btnLineHeightSm', btnLineHeightSm),
      (theme.enableRounded || enableRounded) &&
        themeProp('btnBorderRadiusSm', btnBorderRadiusSm)
    )};

  ${({ size, theme }) =>
    size === 'large' &&
    buttonSize(
      themeProp('btnPaddingYlg', btnPaddingYlg),
      themeProp('btnPaddingXlg', btnPaddingXlg),
      themeProp('fontSizeLg', fontSizeLg),
      themeProp('btnLineHeightLg', btnLineHeightLg),
      (theme.enableRounded || enableRounded) &&
        themeProp('btnBorderRadiusLg', btnBorderRadiusLg)
    )};

  ${({ active }) =>
    active &&
    css`
      background-image: none;
      ${boxShadow(themeProp('btnFocusBoxShadow', btnFocusBoxShadow))};
    `};
`;

Button.Link = Button.withComponent('a');

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
