import React from 'react';
import styled, { css } from 'styled-components';

import * as defaults from '../../defaultTheme';

const Heading = styled.h1`
  margin-bottom: ${defaults.headingsMarginBottom};
  font-family: ${defaults.headingsFontFamily};
  font-weight: ${defaults.headingsFontWeight};
  line-height: ${defaults.headingsLineHeight};
  color: ${defaults.headingsColor};
`;

Heading.H1 = Heading.withComponent('h1').extend`
  font-size: ${defaults.fontSizeH1};
`;

const H1 = props => <Heading.H1 {...props}>{props.children}</Heading.H1>;

export default Heading.H1;
