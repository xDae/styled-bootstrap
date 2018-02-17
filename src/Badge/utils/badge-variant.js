// @flow

import { css } from 'styled-components';
// $FlowIssue
import darken from 'polished/lib/color/darken';

import { colorYiq } from '../../utils/color-functions';

export function badgeVariant(color: string) {
  return css`
    color: ${colorYiq(color)};
    background-color: ${color};

    &[href] {
      &:hover {
        color: ${colorYiq(color)};
        text-decoration: none;
        background-color: ${darken(0.1, color)};
      }
    }
  `;
}

export default badgeVariant;
