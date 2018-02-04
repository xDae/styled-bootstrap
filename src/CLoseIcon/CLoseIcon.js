// @flow

import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import defaultTheme from './default-theme';

import { hoverFocus } from '../../src/utils/src';

export const StyledCloseIcon = styled.button`
  font-size: ${prop('theme.closeFontSize', defaultTheme.closeFontSize)};
  font-weight: ${prop('theme.closeFontWeight', defaultTheme.closeFontWeight)};
  line-height: 1;
  color: ${prop('theme.closeColor', defaultTheme.closeColor)};
  text-shadow: ${prop('theme.closeTextShadow', defaultTheme.closeTextShadow)};
  opacity: 0.5;

  ${hoverFocus(`
    color: ${prop('theme.closeColor', defaultTheme.closeColor)};
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
