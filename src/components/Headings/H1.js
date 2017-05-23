import React from 'react';
import styled, { css } from 'styled-components';

import * as defaults from '../../defaultTheme';

const headingsDefaults = css`
  margin-bottom: ${defaults.headingsMarginBottom};
  font-family: ${defaults.headingsFontFamily};
  font-weight: ${defaults.headingsFontWeight};
  line-height: ${defaults.headingsLineHeight};
  color: ${defaults.headingsColor};
`;

const StyledH1 = styled.h1`
  ${headingsDefaults}

  font-size: ${defaults.fontSizeH1}
`;

const H1 = props => <StyledH1 {...props}>{props.children}</StyledH1>;

export default H1;
