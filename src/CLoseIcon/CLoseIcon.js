// @flow

import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import defaultTheme from './default-theme';

import { hoverFocus } from '../../src/utils/src';

export const StyledCloseIcon = styled.button`
  font-size: ${prop('theme.closeFontSize')};
  font-weight: ${prop('theme.closeFontWeight')};
  line-height: 1;
  color: ${prop('theme.closeColor')};
  text-shadow: ${prop('theme.closeTextShadow')};
  opacity: 0.5;

  ${hoverFocus(`
    color: ${prop('theme.closeColor')};
    text-decoration: none;
    opacity: .75;
  `)};

  /* Opinionated: add "hand" cursor to non-disabled .close elements */
  &:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  padding: 0;
  background: transparent;
  border: 0;
  -webkit-appearance: none;
`;

// var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// React.createElement(
//   StyledCloseIcon,
//   _extends({ 'aria-label': 'Close' }, props),
//   React.createElement(
//     "span",
//     { "aria-hidden": "true" },
//     props.children || '×'
//   )
// );

const CloseIcon = props => (
  <StyledCloseIcon aria-label="Close" {...props}>
    <span aria-hidden="true">{props.children || '×'}</span>
  </StyledCloseIcon>
);

// CloseIcon.defaultProps = {
//   theme: defaultTheme
// };

StyledCloseIcon.defaultProps = {
  theme: defaultTheme
};

export default CloseIcon;
