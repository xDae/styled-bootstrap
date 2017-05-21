import React, { Component } from 'react';
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

class H2 extends Component {
  render() {
    return <StyledH2 {...this.props}>{this.props.children}</StyledH2>;
  }
}

export default H2;
