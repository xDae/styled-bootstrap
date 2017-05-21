import { css } from 'styled-components';
import { darken } from 'polished';

import { white, black } from '../defaultTheme';

import { borderRadius } from './border-radius';
import { boxShadow } from './box-shadow';
import { hover } from './hover';

export function buttonVariant(color, background, border) {
  const activeBackground = darken(0.1, background);
  const activeBorder = darken(0.12, border);

  return css`
    color: ${color};
    background-color: ${background};
    border-color: ${border};

    ${boxShadow(css`
      inset 0 1px 0 rgba(${white}, 0.15), 0 1px 1px rgba(${black}, 0.075)
    `)}

    // Hover and focus styles are shared
    ${hover(css`
      color: ${color};
      background-color: ${activeBackground};
      border-color: ${activeBorder};
    `)}

    &:focus,
    &.focus {
      // Avoid using mixin so we can pass custom focus shadow properly
      // @if $enable-shadows {
      //   box-shadow: $btn-box-shadow, 0 0 0 2px rgba(${border}, .5);
      // } @else {
      //   box-shadow: 0 0 0 2px rgba(${border}, .5);
      // }
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
      color: ${color};
      background-color: ${activeBackground};
      background-image: none; // Remove the gradient for the pressed/active state
      border-color: ${activeBorder};
      // @include box-shadow($btn-active-box-shadow);
    }
  `;
}

export function buttonOutlineVariant(color, colorHover = '#fff') {
  return css`
    color: ${color};
    background-image: none;
    background-color: transparent;
    border-color: ${color};

    ${hover(css`
      color: ${colorHover};
      background-color: ${color};
      border-color: ${color};
    `)};

    &:focus,
    &.focus {
      box-shadow: 0 0 0 2px rgba(${color}, .5);
    }

    &.disabled,
    &:disabled {
      color: ${color};
      background-color: transparent;
    }

    &:active,
    &.active,
    .show > &.dropdown-toggle {
      color: ${colorHover};
      background-color: ${color};
      border-color: ${color};
    }
  `;
}

export function buttonSize(paddingY, paddingX, fontSize, _borderRadius) {
  return css`
    padding: ${paddingY} ${paddingX};
    font-size: ${fontSize};
    ${borderRadius(_borderRadius)}
  `;
}
