// @flow

import React from 'react';
import styled from 'styled-components';
import themeProp from '../utils/theme';

import { hoverFocus } from '../../src/utils';

import {
  closeFontSize,
  closeFontWeight,
  closeColor,
  closeTextShadow
} from './default-theme';

export const StyledCloseIcon = styled.button`
  font-size: ${themeProp('closeFontSize', closeFontSize)};
  font-weight: ${themeProp('closeFontWeight', closeFontWeight)};
  line-height: 1;
  color: ${themeProp('closeColor', closeColor)};
  text-shadow: ${themeProp('closeTextShadow', closeTextShadow)};
  opacity: 0.5;

  ${hoverFocus(`
    color: ${themeProp('closeColor', closeColor)};
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

export default CloseIcon;
