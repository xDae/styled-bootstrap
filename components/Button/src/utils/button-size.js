// @flow

import { css } from 'styled-components';
import { borderRadius } from 'styled-bootstrap-utils';

export function buttonSize(
  paddingY: string,
  paddingX: string,
  fontSize: string,
  lineHeight: string,
  radius: string
) {
  return css`
    padding: ${paddingY} ${paddingX};
    font-size: ${fontSize};
    line-height: ${lineHeight};
    ${borderRadius(radius)}
  `;
}

export default buttonSize;
