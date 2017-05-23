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

const StyledH3 = styled.h3`
  ${headingsDefaults}

  font-size: ${defaults.fontSizeH3}
`;

const H3 = props => <StyledH3 {...props}>{props.children}</StyledH3>;

export default H3;
