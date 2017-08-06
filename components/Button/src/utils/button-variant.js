// @flow

import { css } from 'styled-components';
import { darken } from 'polished';

export function buttonVariant(
  background: string,
  border: string,
  activeBackground: string = darken(0.075, background),
  activeBorder: string = darken(0.1, border)
) {
  return css`
    color: ${colorYiq(background)};
    background-color: ${background};
    border-color: ${border};
    ${boxShadow(btnBoxShadow)}

    &:hover {
      color: ${colorYiq(background)};
      background-color: ${activeBackground};
      border-color: ${activeBorder};
    }

    &:focus,
    &.focus {
      // Avoid using mixin so we can pass custom focus shadow properly
      ${enableShadows
        ? `box-shadow: ${btnBoxShadow}, 0 0 0 3px ${sassRgba(border, 0.5)};`
        : `box-shadow: 0 0 0 3px ${sassRgba(border, 0.5)};`}
    }

    // Disabled comes first so active can properly restyle
    &.disabled,
    &:disabled {
      background-color: ${background};
      border-color: ${border};
    }

    &:active,
    &.active,
    .show > &.dropdown-toggle {
      background-color: ${activeBackground};
      background-image: none;
      border-color: ${activeBorder};
      ${boxShadow(btnActiveBoxShadow)}
    }
  `;
}

export default buttonVariant;
