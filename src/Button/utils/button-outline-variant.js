// @flow

import { css } from 'styled-components';

import { hover } from '../../utils/hover';
import { sassRgba } from '../../utils/sassRgba';

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

export default buttonOutlineVariant;
