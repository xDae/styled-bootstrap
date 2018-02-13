import { createElement } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import omit from 'lodash.omit';

const Element = ({ as, children, ...props }) =>
  createElement(as, omit(props, ['as', 'size']), children);

const Heading = styled(Element)`
  margin-bottom: ${props => props.theme.headingsMarginBottom};
  font-family: ${props => props.theme.headingsFontFamily};

  font-weight: ${props => props.theme.headingsFontWeight};
  line-height: ${props => props.theme.headingsLineHeight};
  color: ${props => props.theme.headingsColor};

  ${props => {
    const size = props.size || props.as;

    switch (size) {
      case 'h1':
        return `font-size: ${props.theme.h1FontSize};`;
      case 'h2':
        return `font-size: ${props.theme.h2FontSize};`;
      case 'h3':
        return `font-size: ${props.theme.h3FontSize};`;
      case 'h4':
        return `font-size: ${props.theme.h4FontSize};`;
      case 'h5':
        return `font-size: ${props.theme.h5FontSize};`;
      case 'h6':
        return `font-size: ${props.theme.h6FontSize};`;
      default:
        return `font-size: ${props.theme.fontSizeBase};`;
    }
  }};
`;

Heading.defaultProps = {
  as: 'h1'
};

Heading.proptypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'p']),
  size: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
};

export default Heading;
