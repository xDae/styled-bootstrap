// @flow

import styled from 'styled-components';

// $FlowIssue
import get from 'lodash.get';

import { borderRadius } from '../utils/src/border-radius';

import { paginationSize } from './pagination-size';
import listUnstyled from '../utils/src/lists';

import PaginationLink from './PaginationLink';
import PaginationItem from './PaginationItem';

import {
  paginationPaddingYsm,
  paginationPaddingXsm,
  paginationPaddingYlg,
  paginationPaddingXlg,
  fontSizeLg,
  lineHeightLg,
  borderRadiusLg,
  fontSizeSm,
  lineHeightSm,
  borderRadiusSm
} from './default-theme';

const Pagination = styled.ul`
  display: flex;
  ${listUnstyled};
  ${borderRadius()};

  ${({ size, theme }) =>
    size === 'large' &&
    paginationSize(
      get(theme, 'paginationPaddingYlg', paginationPaddingYlg),
      get(theme, 'paginationPaddingXlg', paginationPaddingXlg),
      get(theme, 'fontSizeLg', fontSizeLg),
      get(theme, 'lineHeightLg', lineHeightLg),
      get(theme, 'borderRadiusLg', borderRadiusLg)
    )};

  ${({ size, theme }) =>
    size === 'small' &&
    paginationSize(
      get(theme, 'paginationPaddingYsm', paginationPaddingYsm),
      get(theme, 'paginationPaddingXsm', paginationPaddingXsm),
      get(theme, 'fontSizeSm', fontSizeSm),
      get(theme, 'lineHeightSm', lineHeightSm),
      get(theme, 'borderRadiusSm', borderRadiusSm)
    )};
`;

Pagination.Link = PaginationLink;
Pagination.Item = PaginationItem;

Pagination.defaultProps = {};

Pagination.propTypes = {};

export default Pagination;
