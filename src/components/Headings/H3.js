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

const StyledH3 = styled.h3`
  ${headingsDefaults}

  font-size: ${defaults.fontSizeH3}
`;

class H3 extends Component {
  render() {
    return <StyledH3 {...this.props}>{this.props.children}</StyledH3>;
  }
}

export default H3;
