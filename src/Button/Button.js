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

import defaultTheme from './defaultTheme';

const btnSizes = {
  normal: {
    paddingY: 'btnPaddingY',
    paddingX: 'btnPaddingX',
    fontSize: 'fontSizeBase',
    lineHeight: 'btnLineHeight',
    borderRadius: 'btnBorderRadius'
  },
  large: {
    paddingY: 'btnPaddingYlg',
    paddingX: 'btnPaddingXlg',
    fontSize: 'fontSizeLg',
    lineHeight: 'btnLineHeightLg',
    borderRadius: 'btnBorderRadiusLg'
  },
  small: {
    paddingY: 'btnPaddingYsm',
    paddingX: 'btnPaddingXsm',
    fontSize: 'fontSizeSm',
    lineHeight: 'btnLineHeightSm',
    borderRadius: 'btnBorderRadiusSm'
  }
};

const Button = styled.button`
  display: ${({ block }) => (block ? 'block' : 'inline-block')};
  width: ${props => props.block && '100%'};
  font-weight: ${themeProp('btnFontWeight')};
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: ${themeProp('btnBorderWidth', defaultTheme.btnBorderWidth)} solid
    transparent;

  ${transition(themeProp('btnTransition', defaultTheme.btnTransition))};

  /* Share hover and focus styles */
  ${hoverFocus('text-decoration: none;')};

  &:focus,
  &.focus {
    outline: 0;
    box-shadow: ${themeProp(
      'btnFocusBoxShadow',
      defaultTheme.btnFocusBoxShadow
    )};
  }

  &.disabled,
  &:disabled {
    opacity: ${themeProp(
      'btnDisabledOpacity',
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
      theme[color],
      theme[color],
      theme.enableShadows,
      theme.btnBoxShadow,
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
    outline && buttonOutlineVariant(theme[color])};

  ${({ size, theme }) =>
    buttonSize(
      theme[btnSizes[size].paddingY] || defaultTheme[btnSizes[size].paddingY],
      theme[btnSizes[size].paddingX] || defaultTheme[btnSizes[size].paddingX],
      theme[btnSizes[size].fontSize] || defaultTheme[btnSizes[size].fontSize],
      theme[btnSizes[size].lineHeight] ||
        defaultTheme[btnSizes[size].lineHeight],
      theme.enableRounded &&
        (theme[btnSizes[size].borderRadius] ||
          defaultTheme[btnSizes[size].borderRadius])
    )};

  ${ifProp(
    'active',
    css`
      background-image: none;
      ${boxShadow(themeProp('btnFocusBoxShadow'))};
    `
  )};
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
