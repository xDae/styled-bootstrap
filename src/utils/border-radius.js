import { css } from 'styled-components';

import { enableRounded } from '../defaultTheme';

export function borderRadius(radius = '0.25rem') {
  if (enableRounded) {
    return css`
      border-radius: ${radius};
    `;
  }
}

export function borderTopTadius(radius) {
  if (enableRounded) {
    return css`
      border-top-right-radius: ${radius};
      border-top-left-radius: ${radius};
    `;
  }
}

export function borderRightRadius(radius) {
  if (enableRounded) {
    return css`
      border-bottom-right-radius: ${radius};
      border-top-right-radius: $radius;
    `;
  }
}

export function borderBottomRadius(radius) {
  if (enableRounded) {
    return css`
      border-bottom-right-radius: ${radius};
      border-bottom-left-radius: ${radius};
    `;
  }
}

export function borderLeftRadius(radius) {
  if (enableRounded) {
    return css`
      border-bottom-left-radius: ${radius};
      border-top-left-radius: ${radius};
    `;
  }
}
