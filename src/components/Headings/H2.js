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

const StyledH2 = styled.h2`
  ${headingsDefaults}

  font-size: ${defaults.fontSizeH2}
`;

const H2 = props => <StyledH2 {...props}>{props.children}</StyledH2>;

export default H2;
