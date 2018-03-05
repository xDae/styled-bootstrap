import styled from 'styled-components';
import PropTypes from 'prop-types';
import themeProp from '../utils/theme';

import { borderRadius } from '../utils/border-radius';

import {
  breadcrumbPaddingY,
  breadcrumbPaddingX,
  breadcrumbItemPadding,
  breadcrumbMarginBottom,
  breadcrumbBg,
  breadcrumbDividerColor,
  breadcrumbActiveColor,
  breadcrumbDivider
} from './default-theme';

const Breadcrumb = styled.ol`
  display: flex;
  flex-wrap: wrap;
  padding: ${themeProp('breadcrumbPaddingY', breadcrumbPaddingY)}
    ${themeProp('breadcrumbPaddingX', breadcrumbPaddingX)};
  margin-bottom: ${themeProp('breadcrumbMarginBottom', breadcrumbMarginBottom)};
  list-style: none;
  background-color: ${themeProp('breadcrumbBg', breadcrumbBg)};
  ${borderRadius(themeProp('bordeRadius', '.25rem'))};
`;

Breadcrumb.Item = styled.li.attrs({
  'aria-current': props => props.active && 'page'
})`
  :not(:first-child)::before {
    display: inline-block;
    padding-right: ${themeProp('breadcrumbItemPadding', breadcrumbItemPadding)};
    padding-left: ${themeProp('breadcrumbItemPadding', breadcrumbItemPadding)};
    color: ${themeProp('breadcrumbDividerColor', breadcrumbDividerColor)};
    content: ${themeProp('breadcrumbDivider', breadcrumbDivider)};
  }

  :not(:first-child)&:hover::before {
    text-decoration: underline;
  }
  :not(:first-child)&:hover::before {
    text-decoration: none;
  }

  ${({ active }) =>
    active &&
    `color: ${themeProp('readcrumbActiveColor', breadcrumbActiveColor)};`};
`;

Breadcrumb.defaultProps = {};

Breadcrumb.Item.defaultProps = {
  active: false
};

Breadcrumb.Item.Proptypes = {
  active: PropTypes.bool
};

export default Breadcrumb;
