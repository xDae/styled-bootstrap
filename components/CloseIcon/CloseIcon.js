import React from 'react';
import styled from 'styled-components';
import { stripUnit } from 'polished';

import { fontSizeBase, fontWeightBold, black, white } from '../../defaultTheme';

import { hoverFocus } from '../../utils/hover';

export const StyledCloseIcon = styled.button`
  font-size: ${props => props.theme.closeFontSize};
  font-weight: ${props => props.theme.closeFontWeight};
  line-height: 1;
  color: ${props => props.theme.closeColor};
  text-shadow: ${props => props.theme.closeTextShadow};
  opacity: .5;

  ${hoverFocus(`
    color: ${props => props.theme.closeColor};
    text-decoration: none;
    opacity: .75;
  `)};

  padding: 0;
  background: transparent;
  border: 0;
  -webkit-appearance: none;
`;

const CloseIcon = props =>
  <StyledCloseIcon {...props}>
    <span aria-hidden="true">&times;</span>
  </StyledCloseIcon>;

CloseIcon.defaultProps = {
  theme: {
    closeFontSize: `${stripUnit(fontSizeBase) * 1.5}rem`,
    closeFontWeight: fontWeightBold,
    closeColor: black,
    closeTextWhadow: `0 1px 0 ${white}`
  }
};

export default CloseIcon;
