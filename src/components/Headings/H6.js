import React from 'react';
import styled, { css } from 'styled-components';

import * as defaults from '../../defaultTheme';

const headingsDefaults = css`
  marginBottom: ${defaults.headingsMarginBottom};
  fontFamily: ${defaults.headingsFontFamily};
  fontWeight: ${defaults.headingsFontWeight};
  lineHeight: ${defaults.headingsLineHeight};
  color: ${defaults.headingsColor};
`;

const StyledH6 = styled.h6`
  ${headingsDefaults}

  font-size: ${defaults.fontSizeH6}
`;

const H6 = props =><StyledH6 {...props}>{props.children}</StyledH6>;

export default H6;
