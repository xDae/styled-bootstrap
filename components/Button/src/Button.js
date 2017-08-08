// @flow

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { prop, ifProp } from 'styled-tools';

import {
  hoverFocus,
  hover,
  transition,
  boxShadow
} from 'styled-bootstrap-utils';

import { buttonVariant } from './utils/button-variant';
import { buttonSize } from './utils/button-size';
import { buttonOutlineVariant } from './utils/button-outline-variant';

import defaultTheme from './defaultTheme';

const Button = styled.button`
  display: inline-block;
  font-weight: ${prop('theme.btnFontWeight', 'normal')};
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: ${prop('theme.inputBtnBorderWidth')} solid transparent;

  ${props => transition(props.theme.btnTransition)};

  // Share hover and focus styles
  ${hoverFocus('text-decoration: none;')};

  &:focus,
  &.focus {
    outline: 0;
    box-shadow: ${prop('theme.btnFocusBoxShadow')};
  }

  &.disabled,
  &:disabled {
    opacity: .65;
    ${boxShadow('none')};
  }

  ${({ theme, color }) =>
    theme.themeColors[color] &&
    buttonVariant(theme.themeColors[color], theme.themeColors[color])};

  ${ifProp(
    { color: 'link' },
    css`
    font-weight: ${prop('theme.fontWeightNormal')};
    color: ${prop('theme.linkColor')};
    border-radius: 0;

    &,
    &:active,
    &.active,
    &:disabled {
      background-color: transparent;
      ${boxShadow('none')}
    }

    &,
    &:focus,
    &:active {
      border-color: transparent;
    }

    ${hover('border-color: transparent;')}

    ${hoverFocus(css`
      color: ${prop('theme.linkHoverColor')};
      text-decoration: ${prop('theme.linkHoverDecoration')};
      background-color: transparent;
    `)}

    &:disabled {
      color: ${prop('theme.btnLinkDisabledColor')};

      ${hoverFocus('text-decoration: none;')}
    }
  `
  )};

  ${({ theme, outline, color }) =>
    outline && buttonOutlineVariant(theme.themeColors[color])};

  ${ifProp(
    { size: 'normal' },
    buttonSize(
      prop('theme.inputBtnPaddingY'),
      prop('theme.inputBtnPaddingX'),
      prop('theme.fontSizeBase'),
      prop('theme.inputBtnLineHeight'),
      prop('theme.btnBorderRadius')
    )
  )};

  ${ifProp(
    { size: 'large' },
    buttonSize(
      prop('theme.inputBtnPaddingYlg'),
      prop('theme.inputBtnPaddingXlg'),
      prop('theme.fontSizeLg'),
      prop('theme.inputBtnLineHeightLg'),
      prop('theme.btnBorderRadiusLg')
    )
  )};

  ${ifProp(
    { size: 'small' },
    buttonSize(
      prop('theme.inputBtnPaddingYsm'),
      prop('theme.inputBtnPaddingXsm'),
      prop('theme.fontSizeSm'),
      prop('theme.inputBtnLineHeightSm'),
      prop('theme.btnBorderRadiusSm')
    )
  )};

  ${ifProp(
    'active',
    css`
    background-image: none;
    ${boxShadow(prop('theme.btnFocusBoxShadow'))}
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
  outline: false,
  theme: defaultTheme
};

Button.propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.string,
  outline: PropTypes.bool
};

export default Button;
