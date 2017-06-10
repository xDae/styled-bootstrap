// @flow

import { css } from 'styled-components';
import { darken } from 'polished';

export function badgeVariant(color: string) {
  return css`
    background-color: ${color};

    &[href] {
      &:hover {
        background-color: ${darken(0.1, color)};
      }
    }
  `;
}

export default badgeVariant;
