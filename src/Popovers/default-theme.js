// @$flow

import { sassRgba } from '../utils/sassRgba';
import { black, white } from '../utils/default-theme';

export const zindexPopover = '1060',

  popoverInnerPadding = '1px',
  popoverBg = white,
  popoverMaxWidth = '276px',
  popoverBorderWidth = '1px',
  popoverBorderColor = sassRgba(black, 0.2),
  popoverBoxShadow = `0 5px 10px rgba(${black},.2)`,

  popoverTitleBbg = `darken(${popoverBg}, 0.03)`,
  popoverTitlePaddingX = '14px',
  popoverTitlePaddingY = '8px',

  popoverContentPaddingX = '14px',
  popoverContentPaddingY = '9px',

  popoverArrowWidth = '10px',
  popoverArrowColor = white,

  popoverArrowOuterWidth = `11px`,
  popoverArrowOuterColor = sassRgba(popoverBorderColor, 0.25);
