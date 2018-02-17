// @flow

import { css } from 'styled-components';

export function gradientBg(
  color: string,
  bodyBg: string = '#fff',
  enableGradients: boolean = false
) {
  if (enableGradients) {
    return css`
      background: ${color}
        linear-gradient(180deg, mix(${bodyBg}, $color, 15%), $color) repeat-x;
    `;
  }
  return `background-color: ${color}`;
}

export function gradientStriped(
  color: string = 'rgba(255,255,255, .15)',
  angle: string = '45deg'
) {
  return css`
    background-image: linear-gradient(
      ${angle},
      ${color} 25%,
      transparent 25%,
      transparent 50%,
      ${color} 50%,
      ${color} 75%,
      transparent 75%,
      transparent
    );
  `;
}

export default gradientStriped;
