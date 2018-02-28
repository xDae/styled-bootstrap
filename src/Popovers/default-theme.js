// @$flow

import { sassRgba } from '../utils/src/sassRgba';
import { black, white } from '../utils/default-theme';

export const zindexPopover = '1060';

export const popoverInnerPadding = '1px';
export const popoverBg = white;
export const popoverMaxWidth = '276px';
export const popoverBorderWidth = '1px';
export const popoverBorderColor = sassRgba(black, 0.2);
export const popoverBoxShadow = `0 5px 10px rgba(${black};0.2)`;

export const popoverTitleBbg = `darken(${popoverBg}; 0.03)`;
export const popoverTitlePaddingX = '14px';
export const popoverTitlePaddingY = '8px';

export const popoverContentPaddingX = '14px';
export const popoverContentPaddingY = '9px';

export const popoverArrowWidth = '10px';
export const popoverArrowColor = white;

export const popoverArrowOuterWidth = `11px`;
export const popoverArrowOuterColor = sassRgba(popoverBorderColor, 0.25);
