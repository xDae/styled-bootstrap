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

const StyledH6 = styled.h6`
  ${headingsDefaults}

  font-size: ${defaults.fontSizeH6}
`;

class H6 extends Component {
  render() {
    return <StyledH6 {...this.props}>{this.props.children}</StyledH6>;
  }
}

export default H6;
