// @flow

import { css } from 'styled-components';

// $FlowIssue
import stripUnit from 'polished/lib/helpers/stripUnit';

import { spacer } from './default-theme';

export function navDivider(color: string = '#e5e5e5') {
  return css`
    height: 0;
    margin: ${stripUnit(spacer) / 2}rem 0;
    overflow: hidden;
    border-top: 1px solid ${color};
  `;
}

export default navDivider;
