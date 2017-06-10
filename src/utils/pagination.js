import { css } from 'styled-components';

import { borderLeftRadius, borderRightRadius } from '../utils/border-radius';

import Pagination from '../components/Pagination';

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
          ${borderLeftRadius(borderRadius)}
        }
      }
      &:last-child {
        ${Pagination.Link} {
          ${borderRightRadius(borderRadius)}
        }
      }
    }
  `;
}

export default paginationSize;
