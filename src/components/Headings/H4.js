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

const StyledH4 = styled.h4`
  ${headingsDefaults}

  font-size: ${defaults.fontSizeH4}
`;

const H4 = props => <StyledH4 {...props}>{props.children}</StyledH4>;

export default H4;
