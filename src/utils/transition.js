import { css } from 'styled-components';

import { enableTransitions, transitionBase } from '../defaultTheme';

export const transition = transition => {
  if (enableTransitions) {
    return css`
      transition: ${transitionBase};
    `;
  }

  return css`
      transition: ${transition};
  `;
};
