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

const StyledH4 = styled.h4`
  ${headingsDefaults}

  font-size: ${defaults.fontSizeH4}
`;

class H4 extends Component {
  render() {
    return <StyledH4 {...this.props}>{this.props.children}</StyledH4>;
  }
}

export default H4;
