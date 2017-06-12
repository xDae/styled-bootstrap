// @flow

import { css } from 'styled-components';

import { enableRounded } from '../defaultTheme';

export function borderRadius(radius?: string = '0.25rem') {
  if (enableRounded) {
    return css`
      border-radius: ${radius};
    `;
  }

  return '';
}

export function borderTopRadius(radius: string) {
  if (enableRounded) {
    return css`
      border-top-right-radius: ${radius};
      border-top-left-radius: ${radius};
    `;
  }
}

export function borderRightRadius(radius): string {
  if (enableRounded) {
    return css`
      border-bottom-right-radius: ${radius};
      border-top-right-radius: ${radius};
    `;
  }
}

export function borderBottomRadius(radius): string {
  if (enableRounded) {
    return css`
      border-bottom-right-radius: ${radius};
      border-bottom-left-radius: ${radius};
    `;
  }
}

export function borderLeftRadius(radius): Array {
  if (enableRounded) {
    return css`
      border-bottom-left-radius: ${radius};
      border-top-left-radius: ${radius};
    `;
  }
}
