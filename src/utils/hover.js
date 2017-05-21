import { css } from 'styled-components';

import { enableHoverMediaQuery } from '../defaultTheme';

export const hover = content => css`
  &:hover { ${content} }
`;

export const hoverFocus = content => {
  if (enableHoverMediaQuery) {
    return css`
      &:focus { ${content}} }
      ${hover(content) }
    `;
  }

  return css`
    &:focus,
    &:hover {
      ${content}
    }
  `;
}

export const plainHoverFocus = content => {
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
}

export const hoverFocusActive = content => {
  if (enableHoverMediaQuery) {
    return css`
      &:focus,
      &:active {
        ${content}
      }
      ${hover(content) }
    `;
  }

  return css`
    &:focus,
    &:active,
    &:hover {
      ${content}
    }
  `;
}
