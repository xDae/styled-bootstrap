// @flow

import { css } from 'styled-components';

import {
  borderLeftRadius,
  borderRightRadius
} from '../utils/src/border-radius';

import PaginationLink from './PaginationLink';
import PaginationItem from './Pagination';

export function paginationSize(
  paddingY: string,
  paddingX: string,
  fontSize: string,
  lineHeight: string,
  borderRadius: string
) {
  return css`
    ${PaginationLink} {
      padding: ${paddingY} ${paddingX};
      font-size: ${fontSize};
    }

    ${PaginationItem} {
      &:first-child {
        ${PaginationLink} {
          ${borderLeftRadius(borderRadius)};
        }
      }
      &:last-child {
        ${PaginationLink} {
          ${borderRightRadius(borderRadius)};
        }
      }
    }
  `;
}

export default paginationSize;
