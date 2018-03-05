import { createElement } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import omit from 'lodash.omit';

import themeProp from '../utils/theme';

import * as defaultTheme from './default-theme';

const {
  headingsMarginBottom,
  headingsFontFamily,
  headingsFontWeight,
  headingsLineHeight,
  headingsColor
} = defaultTheme;

const Element = ({ as, children, ...props }) =>
  createElement(as, omit(props, ['as', 'size']), children);

const Heading = styled(Element)`
  margin-bottom: ${themeProp('headingsMarginBottom', headingsMarginBottom)};
  font-family: ${themeProp('headingsFontFamily', headingsFontFamily)};

  font-weight: ${themeProp('headingsFontWeight', headingsFontWeight)};
  line-height: ${themeProp('headingsLineHeight', headingsLineHeight)};
  color: ${themeProp('headingsColor', headingsColor)};

  ${props => {
    const size = props.size || props.as;

    return css`
      font-size: ${themeProp(
        `${size}FontSize`,
        defaultTheme[`${size}FontSize`]
      )};
    `;
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
