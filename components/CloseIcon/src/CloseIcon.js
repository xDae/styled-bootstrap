import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import { stripUnit } from 'polished';

import { hoverFocus, theme } from '@styled-bootstrap/utils';

export const StyledCloseIcon = styled.button`
  font-size: ${prop('theme.closeFontSize')};
  font-weight: ${prop('theme.closeFontWeight')};
  line-height: 1;
  color: ${prop('theme.closeColor', '#000')};
  text-shadow: ${prop('theme.closeTextShadow')};
  opacity: .5;

  ${hoverFocus(`
    color: ${prop('theme.closeColor', '#000')};
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
    closeFontSize: `${stripUnit(theme.fontSizeBase) * 1.5}rem`,
    closeFontWeight: theme.fontWeightBold,
    closeColor: theme.black,
    closeTextShadow: `0 1px 0 ${theme.white}`
  }
};

export default CloseIcon;
