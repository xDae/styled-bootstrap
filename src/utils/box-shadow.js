import { css } from 'styled-components';

import { enableShadows } from '../defaultTheme';

export function boxShadow(shadow) {
  if (enableShadows) {
    return css`
      box-shadow: ${shadow};
    `;
  }

  return null;
}

export default boxShadow;
