// @flow

import { css } from 'styled-components';

export function buttonSize(
  paddingY: string,
  paddingX: string,
  fontSize: string,
  lineHeight: string,
  borderRadius: string
) {
  return css`
    padding: ${paddingY} ${paddingX};
    font-size: ${fontSize};
    line-height: ${lineHeight};

    border-radius: ${borderRadius || '0'};
  `;
}

export default buttonSize;
