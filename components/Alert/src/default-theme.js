// @flow

import { sassRgba, theme } from 'styled-bootstrap-utils';

const defaultTheme = {
  alertPaddingY: '.75rem',
  alertPaddingX: '1.25rem',
  alertMarginBottom: '1rem',
  alertBorderRadius: theme.borderRadius,
  alertLinkFontWeight: theme.fontWeightBold,
  alertBorderWidth: theme.borderWidth,

  alertSuccessBg: theme.stateSuccessBg,
  alertSuccessText: theme.stateSuccessText,
  alertSuccessBorderColor: theme.stateSuccessBorderColor,

  alertInfoBg: theme.stateInfoBg,
  alertInfoText: theme.stateInfoText,
  alertInfoBorderColor: theme.stateInfoBorderColor,

  alertWarningBg: theme.stateWarningBg,
  alertWarningText: theme.stateWarningText,
  alertWarningBorderColor: theme.stateWarningBorderColor,

  alertDangerBg: theme.stateDangerBg,
  alertDangerText: theme.stateDangerText,
  alertDangerBorderColor: theme.stateDangerBorderColor
};

export default defaultTheme;
