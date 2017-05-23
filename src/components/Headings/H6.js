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

const StyledH6 = styled.h6`
  ${headingsDefaults}

  font-size: ${defaults.fontSizeH6}
`;

const H6 = props =><StyledH6 {...props}>{props.children}</StyledH6>;

export default H6;
