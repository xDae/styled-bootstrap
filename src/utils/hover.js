//  @flow

import { css } from 'styled-components';

import { enableHoverMediaQuery } from '../defaultTheme';

export const hover = (content: string) => css`
  &:hover { ${content} }
`;

export const hoverFocus = (content: string) => {
  if (enableHoverMediaQuery) {
    return css`
      &:focus { ${content}} }
      ${hover(content)}
    `;
  }

  return css`
    &:focus,
    &:hover {
      ${content}
    }
  `;
};

export const plainHoverFocus = (content: string) => {
  if (enableHoverMediaQuery) {
    return css`
      &,
      &:focus {
        ${content}
      }
      ${hover(content)}
    `;
  }

  return css`
    &,
    &:focus,
    &:hover {
      ${content}
    }
  `;
};

export const hoverFocusActive = content => {
  if (enableHoverMediaQuery) {
    return css`
      &:focus,
      &:active {
        ${content}
      }
      ${hover(content)}
    `;
  }

  return css`
    &:focus,
    &:active,
    &:hover {
      ${content}
    }
  `;
};
