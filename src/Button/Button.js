// @flow

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { prop, ifProp } from 'styled-tools';

import { boxShadow } from '../utils/src/box-shadow';
import { hover, hoverFocus } from '../utils/src/hover';
import { transition } from '../utils/src/transition';

import { buttonVariant } from './utils/button-variant';
import { buttonSize } from './utils/button-size';
import { buttonOutlineVariant } from './utils/button-outline-variant';

import defaultTheme from './defaultTheme';

const btnSizes = {
  normal: {
    paddingY: 'inputBtnPaddingY',
    paddingX: 'inputBtnPaddingX',
    fontSize: 'fontSizeBase',
    lineHeight: 'inputBtnLineHeight',
    borderRadius: 'btnBorderRadius'
  },
  large: {
    paddingY: 'inputBtnPaddingYlg',
    paddingX: 'inputBtnPaddingXlg',
    fontSize: 'fontSizeLg',
    lineHeight: 'inputBtnLineHeightLg',
    borderRadius: 'btnBorderRadiusLg'
  },
  small: {
    paddingY: 'inputBtnPaddingYsm',
    paddingX: 'inputBtnPaddingXsm',
    fontSize: 'fontSizeSm',
    lineHeight: 'inputBtnLineHeightSm',
    borderRadius: 'btnBorderRadiusSm'
  }
};

const Button = styled.button`
  display: inline-block;
  font-weight: ${prop('theme.btnFontWeight', defaultTheme.btnFontWeight)};
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: ${prop('theme.inputBtnBorderWidth', defaultTheme.inputBtnBorderWidth)}
    solid transparent;

  ${transition(prop('theme.btnTransition', defaultTheme.btnTransition))};

  /* Share hover and focus styles */
  ${hoverFocus('text-decoration: none;')};

  &:focus,
  &.focus {
    outline: 0;
    box-shadow: ${prop(
      'theme.btnFocusBoxShadow',
      defaultTheme.btnFocusBoxShadow
    )};
  }

  &.disabled,
  &:disabled {
    opacity: ${prop(
      'theme.btnDisabledOpacity',
      defaultTheme.btnDisabledOpacity
    )};
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
      theme || defaultTheme
    )};

  ${ifProp(
    { color: 'link' },
    css`
      font-weight: ${prop('theme.fontWeightNormal', 'normal')};
      color: ${prop('theme.linkColor', '#007bff')};
      border-radius: 0;

      &,
      &:active,
      &.active,
      &:disabled {
        background-color: transparent;
        ${boxShadow('none')};
      }

      &,
      &:focus,
      &:active {
        border-color: transparent;
      }

      ${hover('border-color: transparent;')} ${hoverFocus(css`
          color: ${prop('theme.linkHoverColor')};
          text-decoration: ${prop('theme.linkHoverDecoration', 'underline')};
          background-color: transparent;
        `)} &:disabled {
        color: ${prop('theme.btnLinkDisabledColor')};

        ${hoverFocus('text-decoration: none;')};
      }
    `
  )};

  ${({ theme, outline, color }) =>
    outline && buttonOutlineVariant(theme[color])};

  ${({ size, theme }) =>
    buttonSize(
      theme[btnSizes[size].paddingY],
      theme[btnSizes[size].paddingX],
      theme[btnSizes[size].fontSize],
      theme[btnSizes[size].lineHeight],
      theme.enableRounded && theme[btnSizes[size].borderRadius]
    )};

  ${ifProp(
    'active',
    css`
      background-image: none;
      ${boxShadow(prop('theme.btnFocusBoxShadow'))};
    `
  )};

  ${props =>
    props.block &&
    css`
      display: block;
      width: 100%;
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
