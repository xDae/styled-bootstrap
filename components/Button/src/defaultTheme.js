// @flow

import {
  white,
  black,
  borderRadius,
  borderRadiusLg,
  borderRadiusSm,
  gray600,
  fontWeightNormal,
  sassRgba,
  themeColors
} from 'styled-bootstrap-utils';

const theme = {
  inputBtnPaddingY: '.5rem',
  inputBtnPaddingX: '.75rem',
  inputBtnLineHeight: '1.25',

  inputBtnPaddingYsm: '.25rem',
  inputBtnPaddingXsm: '.5rem',
  inputBtnLineHeightSm: '1.5',

  inputBtnPaddingYlg: '.5rem',
  inputBtnPaddingXlg: '1rem',
  inputBtnLineHeightLg: '1.5',

  btnFontWeight: fontWeightNormal,
  btnBoxShadow: `inset 0 1px 0 ${sassRgba(white, 0.15)}, 0 1px 1px ${sassRgba(
    black,
    0.075
  )}`,
  btnFocusBoxShadow: `0 0 0 3px ${sassRgba(themeColors.primary, 0.25)}`,
  btnActiveBoxShadow: `inset 0 3px 5px ${sassRgba(black, 0.125)}`,

  btnLinkDisabledColor: gray600,

  btnBlockSpacingY: '.5rem',

  // Allows for customizing button radius independently from global border radius
  btnBorderRadius: borderRadius,
  btnBorderRadiusLg: borderRadiusLg,
  btnBorderRadiusSm: borderRadiusSm,

  btnTransition: `all .15s ease-in-out`
};

export default theme;
