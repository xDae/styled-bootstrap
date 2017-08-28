// @flow

import { sassRgba, theme } from 'styled-bootstrap-utils';

const defaultTheme = {
  inputBtnPaddingY: '.5rem',
  inputBtnPaddingX: '.75rem',
  inputBtnLineHeight: '1.25',

  inputBtnPaddingYsm: '.25rem',
  inputBtnPaddingXsm: '.5rem',
  inputBtnLineHeightSm: '1.5',

  inputBtnPaddingYlg: '.5rem',
  inputBtnPaddingXlg: '1rem',
  inputBtnLineHeightLg: '1.5',

  inputBtnBorderWidth: theme.inputBtnBorderWidth,

  btnFontWeight: theme.fontWeightNormal,
  btnBoxShadow: `inset 0 1px 0 ${sassRgba(
    theme.white,
    0.15
  )}, 0 1px 1px ${sassRgba(theme.black, 0.075)}`,
  btnFocusBoxShadow: `0 0 0 3px ${sassRgba(theme.blue, 0.25)}`,
  btnActiveBoxShadow: `inset 0 3px 5px ${sassRgba(theme.black, 0.125)}`,

  btnLinkDisabledColor: theme.gray600,

  btnBlockSpacingY: '.5rem',

  // Allows for customizing button radius independently from global border radius
  btnBorderRadius: theme.borderRadius,
  btnBorderRadiusLg: theme.borderRadiusLg,
  btnBorderRadiusSm: theme.borderRadiusSm,

  btnTransition: `all .15s ease-in-out`,
  colorTheme: theme.themeColors
};

export default defaultTheme;
