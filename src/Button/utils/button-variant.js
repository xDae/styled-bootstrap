// @flow

import { css } from 'styled-components';
import { darken } from 'polished';

import { colorYiq } from '../../utils/src/color-functions';
import { boxShadow } from '../../utils/src/box-shadow';
import { gradientBg } from '../../utils/src/gradients';
import { sassRgba } from '../../utils/src/sassRgba';
import { hover } from '../../utils/src/hover';

export function buttonVariant(
  background: string,
  border: string,
  enableShadows: boolean,
  btnBoxShadow: string,
  btnActiveBoxShadow: string,
  hoverBackground: string = darken(0.075, background),
  hoverBorder: string = darken(0.1, border),
  activeBackground: string = darken(0.1, background),
  activeBorder: string = darken(0.125, border)
) {
  return css`
    color: ${colorYiq(background)};
    background-color: ${background};
    border-color: ${border};

    ${boxShadow(btnBoxShadow)};

    ${hover(css`
      color: ${colorYiq(hoverBackground)};
      ${gradientBg(hoverBackground)};
      border-color: ${hoverBorder};
    `)};

    &:focus,
    &.focus {
      /* Avoid using mixin so we can pass custom focus shadow properly */
      ${enableShadows
        ? `box-shadow: ${btnBoxShadow}, 0 0 0 3px ${sassRgba(border, 0.5)};`
        : `box-shadow: 0 0 0 3px ${sassRgba(border, 0.5)};`};
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
      ${boxShadow(btnActiveBoxShadow)};
    }
  `;
}

export default buttonVariant;
