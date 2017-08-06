// @flow

import { css } from 'styled-components';
import { darken } from 'polished';

// import { white, black } from '../defaultTheme';

import { colorYiq } from '../utils/color-functions';
import { borderRadius } from './border-radius';
import { boxShadow } from './box-shadow';
import { hover } from './hover';
import { sassRgba } from '../utils/sassRgba';

import {
  btnBoxShadow,
  btnActiveBoxShadow,
  enableShadows
} from '../defaultTheme';

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

export function buttonOutlineVariant(
  color: string,
  colorHover: string = '#fff'
) {
  return css`
    color: ${color};
    background-color: transparent;
    background-image: none;
    border-color: ${color};

    ${hover(css`
      color: ${colorHover};
      background-color: ${color};
      border-color: ${color};
    `)};

    &:focus,
    &.focus {
      box-shadow: 0 0 0 3px ${sassRgba(color, 0.5)};
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

export function buttonSize(paddingY, paddingX, fontSize, lineHeight, radius) {
  return css`
    padding: ${paddingY} ${paddingX};
    font-size: ${fontSize};
    line-height: ${lineHeight};
    ${borderRadius(radius)}
  `;
}
