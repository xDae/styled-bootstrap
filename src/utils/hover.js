//  @flow

import { css } from 'styled-components';

import { enableHoverMediaQuery } from '../defaultTheme';

export const hover = (content: string | Array) => css`
  &:hover { ${content} }
`;

export const hoverFocus = (content: string | Array) => {
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

export const plainHoverFocus = (content: string | Array) => {
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

export const hoverFocusActive = (content: string | Array) => {
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
