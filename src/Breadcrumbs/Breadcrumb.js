import styled from 'styled-components';
import PropTypes from 'prop-types';
import { prop } from 'styled-tools';

import { borderRadius } from '../utils/src/border-radius';

import defaultTheme from './default-theme';

const Breadcrumb = styled.ol`
  display: flex;
  flex-wrap: wrap;
  padding: ${prop('theme.breadcrumbPaddingY', defaultTheme.breadcrumbPaddingY)}
    ${prop('theme.breadcrumbPaddingX', defaultTheme.breadcrumbPaddingX)};
  margin-bottom: ${prop(
    'theme.breadcrumbMarginBottom',
    defaultTheme.breadcrumbMarginBottom
  )};
  list-style: none;
  background-color: ${prop('theme.breadcrumbBg', defaultTheme.breadcrumbBg)};
  ${borderRadius(prop('theme.bordeRadius', '.25rem'))};
`;

Breadcrumb.Item = styled.li.attrs({
  'aria-current': props => props.active && 'page'
})`
  :not(:first-child)::before {
    display: inline-block;
    padding-right: ${prop(
      'theme.breadcrumbItemPadding',
      defaultTheme.breadcrumbItemPadding
    )};
    padding-left: ${prop(
      'theme.breadcrumbItemPadding',
      defaultTheme.breadcrumbItemPadding
    )};
    color: ${prop(
      'theme.breadcrumbDividerColor',
      defaultTheme.breadcrumbDividerColor
    )};
    content: ${prop('theme.breadcrumbDivider', defaultTheme.breadcrumbDivider)};
  }

  :not(:first-child)&:hover::before {
    text-decoration: underline;
  }
  :not(:first-child)&:hover::before {
    text-decoration: none;
  }

  ${({ active, theme }) => active && `color: ${theme.breadcrumbActiveColor};`};
`;

Breadcrumb.defaultProps = {};

Breadcrumb.Item.defaultProps = {
  active: false
};

Breadcrumb.Item.Proptypes = {
  active: PropTypes.bool
};

export default Breadcrumb;
