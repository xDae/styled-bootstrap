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

const StyledH5 = styled.h5`
  ${headingsDefaults}

  font-size: ${defaults.fontSizeH5}
`;

const H5 = props => <StyledH5 {...props}>{props.children}</StyledH5>;

export default H5;
