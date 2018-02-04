// @flow

import { css } from 'styled-components';
import { darken } from 'polished';

import { colorYiq } from '../../utils/src/color-functions';

export function badgeVariant(color: string) {
  return css`
    color: ${colorYiq(color)};
    background-color: ${color};

    &[href] {
      &:hover {
        color: ${colorYiq(color)};
        text-decoration: none;
        background-color: ${darken(0.1, color)};
      }npm
    }
  `;
}

export default badgeVariant;
