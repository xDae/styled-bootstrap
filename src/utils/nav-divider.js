import { css } from 'styled-components';

import { spacer } from '../defaultTheme';

export function navDivider(color = '#e5e5e5') {
  return css`
    height: 0;
    margin: ${spacer / 2}rem 0;
    overflow: hidden;
    border-top: 1px solid ${color};
  `;
}

export default navDivider;
