// @ flow

import { css } from 'styled-components';

function listGroupItemVariant(
  state: string,
  background: string,
  color: string
) {
  return css`
    color: ${color};
    background-color: ${background};
  `;
}

export default listGroupItemVariant;
