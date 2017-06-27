import styled from 'styled-components';
import { clearFix } from 'polished';

import { borderRadius } from '../../utils/border-radius';

import {
  breadcrumbPaddingY,
  breadcrumbPaddingX,
  breadcrumbItemPadding,
  breadcrumbBg,
  breadcrumbDividerColor,
  breadcrumbActiveColor,
  breadcrumbDivider
} from '../../defaultTheme';

const Breadcrumb = styled.div`
  ${({ theme }) =>
    `padding: ${theme.breadcrumbPaddingY} ${theme.breadcrumbPaddingX};`};
  margin-bottom: 1rem;
  list-style: none;
  background-color: ${props => props.theme.breadcrumbBg};

  ${props => borderRadius(props.theme.bordeRadius)};
  ${clearFix()};
`;

Breadcrumb.Item = styled.a`
  float: left;

  + :before {
    display: inline-block;
    padding-right: ${({ theme }) => theme.breadcrumbItemPadding};
    padding-left: ${({ theme }) => theme.breadcrumbItemPadding};
    color: ${({ theme }) => theme.breadcrumbDividerColor};
    content: ${({ theme }) => theme.breadcrumbDivider};
  }

  &:hover::before {
    text-decoration: underline;
  }

  &:hover::before {
    text-decoration: none;
  }

  ${({ active, theme }) =>
    active && `color: ${theme.breadcrumbActiveColor} !important;`};
`;

const theme = {
  breadcrumbPaddingY,
  breadcrumbPaddingX,
  breadcrumbItemPadding,
  breadcrumbBg,
  breadcrumbDividerColor,
  breadcrumbActiveColor,
  breadcrumbDivider
};

Breadcrumb.defaultProps = { theme };
Breadcrumb.Item.defaultProps = { theme };

export default Breadcrumb;
