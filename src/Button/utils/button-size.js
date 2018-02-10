// @flow

import { css } from 'styled-components';

export function buttonSize(
  paddingY: string,
  paddingX: string,
  fontSize: string,
  lineHeight: string,
  borderRadius: number = 0
) {
  return css`
    padding: ${paddingY} ${paddingX};
    font-size: ${fontSize};
    line-height: ${lineHeight};

    border-radius: ${borderRadius};
  `;
}

export default buttonSize;
