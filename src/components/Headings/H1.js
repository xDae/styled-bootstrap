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

const StyledH1 = styled.h1`
  ${headingsDefaults}

  font-size: ${defaults.fontSizeH1}
`;

class H1 extends Component {
  render() {
    return <StyledH1 {...this.props}>{this.props.children}</StyledH1>;
  }
}

export default H1;
