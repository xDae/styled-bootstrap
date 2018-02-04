// @flow

import { css } from 'styled-components';

import { enableTransitions, transitionBase } from './defaultTheme';

export const transition = (transitionType: string) => {
  if (enableTransitions) {
    return css`
      transition: ${transitionBase};
    `;
  }

  return css`
    transition: ${transitionType};
  `;
};

export default transition;
