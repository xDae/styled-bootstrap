import React from 'react';
import styled from 'styled-components';
import { clearFix } from 'polished';

import { borderRadius } from '../../utils/border-radius';

import * as defaults from '../../defaultTheme';

const Breadcrumb = styled.div`
  ${props => `padding: ${props.theme.breadcrumbPaddingY} ${props.theme.breadcrumbPaddingX};`};
  margin-bottom: 1rem;
  list-style: none;
  background-color: ${props => props.theme.breadcrumbBg};

  ${borderRadius(defaults.bordeRadius)};
  ${clearFix()}
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

  ${({ active, theme }) => active && `color: ${theme.breadcrumbActiveColor} !important;`}
`;

const theme = {
  breadcrumbPaddingY: '.75rem',
  breadcrumbPaddingX: '1rem',
  breadcrumbItemPadding: '.5rem',
  breadcrumbBg: defaults.grayLighter,
  breadcrumbDividerColor: defaults.grayLight,
  breadcrumbActiveColor: defaults.grayLight,
  breadcrumbDivider: '"/"',
};

Breadcrumb.defaultProps = { theme };
Breadcrumb.Item.defaultProps = { theme };

export default Breadcrumb;
