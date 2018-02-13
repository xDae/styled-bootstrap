// @flow

import { css } from 'styled-components';

import {
  borderLeftRadius,
  borderRightRadius
} from '../utils/src/border-radius';

import Pagination from './Pagination';

export function paginationSize(
  paddingY,
  paddingX,
  fontSize,
  lineHeight,
  borderRadius
) {
  return css`
    ${Pagination.Link} {
      padding: ${paddingY} ${paddingX};
      font-size: ${fontSize};
    }

    ${Pagination.Item} {
      &:first-child {
        ${Pagination.Link} {
          ${borderLeftRadius(borderRadius)};
        }
      }
      &:last-child {
        ${Pagination.Link} {
          ${borderRightRadius(borderRadius)};
        }
      }
    }
  `;
}

export default paginationSize;
