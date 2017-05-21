import { css } from 'styled-components';

import { enableShadows } from '../defaultTheme';

export const boxShadow = shadow => {
  if (enableShadows) {
    return css`
      box-shadow: ${shadow};
    `;
  }
}
