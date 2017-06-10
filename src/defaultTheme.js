import { darken, lighten, stripUnit } from 'polished';

import { sassRgba } from './utils/sassRgba';

// General variable structure

// Colors
//
// Grayscale and brand colors for use across Bootstrap.

// Start with assigning color names to specific hex values.
export const white = '#fff';
export const black = '#000';
export const red = '#d9534f';
export const orange = '#f0ad4e';
export const yellow = '#ffd500';
export const green = '#5cb85c';
export const blue = '#0275d8';
export const teal = '#5bc0de';
export const pink = '#ff5b77';
export const purple = '#613d7c';

// Create grayscale
export const grayDark = '#292b2c';
export const gray = '#464a4c';
export const grayLight = '#636c72';
export const grayLighter = '#eceeef';
export const grayLightest = '#f7f7f9';

// Reassign color vars to semantic color scheme
export const brandPrimary = blue;
export const brandSuccess = green;
export const brandInfo = teal;
export const brandWarning = orange;
export const brandDanger = red;
export const brandInverse = grayDark;

// Options
//
// Quickly modify global styling by enabling or disabling optional features.

export const enableRounded = true;
export const enableShadows = false;
export const enableGradients = false;
export const enableTransitions = true;
export const enableHoverMediaQuery = false;
export const enableGridClasses = true;
export const enablePrintStyles = true;

// Spacing
//
// Control the default styling of most Bootstrap elements by modifying these
// variables. Mostly focused on spacing.
// You can add more entries to the $spacers map, should you need more variation.

// export const spacer = '1rem';
export const spacer = 1;
export const spacerX = spacer;
export const spacerY = spacer;
export const spacers = {
  0: {
    x: 0,
    y: 0
  },
  1: {
    x: spacerX * 0.25,
    y: spacerY * 0.25
  },
  2: {
    x: spacerX * 0.5,
    y: spacerY * 0.5
  },
  3: {
    x: spacerX,
    y: spacerY
  },
  4: {
    x: spacerX * 1.5,
    y: spacerY * 1.5
  },
  5: {
    x: spacerX * 3,
    y: spacerY * 3
  }
};

export const borderWidth = '1px';

// This variable affects the `.h-*` and `.w-*` classes.
export const sizes = {
  25: '25%',
  50: '50%',
  75: '75%',
  100: '100%'
};

// Body
//
// Settings for the `<body>` element.

export const bodyBg = white;
export const bodyColor = grayDark;
export const inverseBg = grayDark;
export const inverseColor = grayLighter;

// Links
//
// Style anchor elements.

export const linkColor = brandPrimary;
export const linkDecoration = 'none';
export const linkHoverColor = darken(0.15, linkColor);
export const linkHoverDecoration = 'underline';

// Components
//
// Define common padding and border radius sizes and more.

export const lineHeightLg = 4 / 3;
export const lineHeightSm = 1.5;

export const borderRadius = '0.25rem';
export const borderRadiusLg = '0.3rem';
export const borderRadiusSm = '0.2rem';

export const componentActiveColor = white;
export const componentActiveBg = brandPrimary;

export const caretWidth = '0.3em';

export const transitionBase = 'all .2s ease-in-out';
export const transitionFade = 'opacity 0.15s linear';
export const transitionCollapse = 'height 0.35s ease';

// Fonts
//
// Font, lineHeight, and color for body text, headings, and more.

export const fontFamilySansSerif = `-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`;
export const fontFamilySerif = `Georgia, "Times New Roman", Times, serif`;
export const fontFamilyMonnospace = `Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;
export const fontFamilyBase = fontFamilySansSerif;

export const fontSizeBase = '1rem';
export const fontSizeLg = '1.25rem';
export const fontSizeSm = '0.875rem';
export const fontSizeXs = '0.75rem';

export const fontWeightNormal = 'normal';
export const fontWeightBold = 'bold';

export const fontWeightBase = fontWeightNormal;
export const lineHeightBase = 1.5;

export const fontSizeH1 = '2.5rem';
export const fontSizeH2 = '2rem';
export const fontSizeH3 = '1.75rem';
export const fontSizeH4 = '1.5rem';
export const fontSizeH5 = '1.25rem';
export const fontSizeH6 = '1rem';

export const headingsMarginBottom = `${spacer / 2}rem`;
export const headingsFontFamily = 'inherit';
export const headingsFontWeight = 500;
export const headingsLineHeight = 1.1;
export const headingsColor = 'inherit';

// Pagination

export const paginationPaddingY = '.5rem';
export const paginationPaddingX = '.75rem';
export const paginationPaddingYsm = '.25rem';
export const paginationPaddingXsm = '.5rem';
export const paginationPaddingYlg = '.75rem';
export const paginationPaddingXlg = '1.5rem';
export const paginationLineHeight = '1.25';

export const paginationColor = linkColor;
export const paginationBg = white;
export const paginationBorderWidth = borderWidth;
export const paginationBorderColor = '#ddd';

export const paginationHoverColor = linkHoverColor;
export const paginationHoverBg = grayLighter;
export const paginationHoverBorderColor = '#ddd';

export const paginationActiveColor = white;
export const paginationActiveBg = brandPrimary;
export const paginationActiveBorderColor = brandPrimary;

export const paginationDisabledColor = grayLight;
export const paginationDisabledBg = white;
export const paginationDisabledBorderColor = '#ddd';

// Form states and alerts
//
// Define colors for form feedback states and, by default, alerts.

export const stateSuccessText = '#3c763d';
export const stateSuccessBg = '#dff0d8';
export const stateSuccessBorderColor = darken(0.05, stateSuccessBg);

export const stateInfoText = '#31708f';
export const stateInfoBg = '#d9edf7';
export const stateInfoBorderColor = darken(0.07, stateInfoBg);

export const stateWarningText = '#8a6d3b';
export const stateWarningBg = '#fcf8e3';
export const markBg = stateWarningBg;
export const stateWarningBorderColor = darken(0.05, stateWarningBg);

export const stateDangerText = '#a94442';
export const stateDangerBg = '#f2dede';
export const stateDangerBorderColor = darken(0.05, stateDangerBg);

// Badges

export const badgeDefaultBg = grayLight;
export const badgePrimaryBg = brandPrimary;
export const badgeSuccessBg = brandSuccess;
export const badgeInfoBg = brandInfo;
export const badgeWarningBg = brandWarning;
export const badgeDangerBg = brandDanger;

export const badgeColor = white;
export const badgeLinkHoverColor = white;
export const badgeFontSize = '75%';
export const badgeFontWeight = fontWeightBold;
export const badgePaddingY = '.25em';
export const badgePaddingX = '.4em';

export const badgePillPaddingX = '.6em';
// Use a higher than normal value to ensure completely rounded edges when
// customizing padding or fontSize on labels.
export const badgePillBorderRadius = '10rem';

// Buttons
//
// For each of Bootstrap's buttons, define text, background and border color.

export const inputBtnPaddingY = '.5rem';
export const inputBtnPaddingX = '1rem';
export const inputBtnLineHeight = 1.25;

export const inputBtnPaddingYsm = '.25rem';
export const inputBtnPaddingXsm = '.5rem';
export const inputBtnLineHeightSm = 1.5;

export const inputBtnPaddingYlg = '.5rem';
export const inputBtnPaddingXlg = '1rem';
export const inputBtnLineHeightLg = 1.5;

export const btnFontWeight = fontWeightNormal;
export const btnBoxShadow = `inset 0 1px 0 ${sassRgba(
  white,
  0.15
)}, 0 1px 1px ${sassRgba(black, 0.075)}`;
export const btnFocusBoxShadow = `0 0 0 2px ${sassRgba(brandPrimary, 0.25)}`;
export const btnActiveBoxShadow = `inset 0 3px 5px rgba($black,.125)`;

export const btnPrimaryColor = white;
export const btnPrimaryBg = brandPrimary;
export const btnPrimaryBorderColor = btnPrimaryBg;

export const btnSecondaryColor = grayDark;
export const btnSecondaryBg = white;
export const btnSecondaryBorderColor = '#ccc';

export const btnInfoColor = white;
export const btnInfoBg = brandInfo;
export const btnInfoBorderColor = btnInfoBg;

export const btnSuccessColor = white;
export const btnSuccessBg = brandSuccess;
export const btnSuccessBorderColor = btnSuccessBg;

export const btnWarningColor = white;
export const btnWarningBg = brandWarning;
export const btnWarningBorderColor = btnWarningBg;

export const btnDangerColor = white;
export const btnDangerBg = brandDanger;
export const btnDangerBorderColor = btnDangerBg;

export const btnLinkDisabledColor = grayLight;

export const btnBlockSpacingY = '.5rem';

// Allows for customizing button radius independently from global border radius
export const btnBorderRadius = borderRadius;
export const btnBorderRadiusLg = borderRadiusLg;
export const btnBorderRadiusSm = borderRadiusSm;

export const btnTransition = 'all .2s ease-in-out';

// Forms

export const inputBg = white;
export const inputBgDisabled = grayLighter;

export const inputColor = gray;
export const inputBorderColor = sassRgba(black, 0.15);
export const inputBtnBorderWidth = borderWidth; // For form controls ans
export const inputBoxShadow = `inset 0 1px 1px ${sassRgba(black, 0.075)}`;

export const inputBorderRadius = borderRadius;
export const inputBorderRadiusLg = borderRadiusLg;
export const inputBorderRadiusSm = borderRadiusSm;
export const inputBgFocus = inputBg;
export const inputBorderColorFocus = lighten(0.25, brandPrimary);
export const inputBoxShadowFocus = `${inputBoxShadow}, ${sassRgba(
  inputBorderColorFocus,
  0.6
)}`;
export const inputColorFocus = inputColor;
export const inputColorPlaceholder = grayLight;

export const inputHeight =
  fontSizeBase * inputBtnLineHeight + inputBtnPaddingY * 2;
export const inputHeightLg =
  fontSizeLg * inputBtnLineHeightLg + inputBtnPaddingYlg * 2;
export const inputHeightSm =
  fontSizeSm * inputBtnLineHeightSm + inputBtnPaddingYsm * 2;

export const inputTransition = `borderColor ease-in-out .15s, box-shadow ease-in-out .15s`;

// Dropdowns
//
// Dropdown menu container and contents.

export const dropdownMinWidth = '10rem';
export const dropdownPaddingY = '.5rem';
export const dropdownMarginTop = '.125rem';
export const dropdownBg = white;
export const dropdownBorderColor = sassRgba(black, 0.15);
export const dropdownBorderWidth = borderWidth;
export const dropdownDividerBg = grayLighter;
export const dropdownBoxShadow = `0 .5rem 1rem ${sassRgba(black, 0.175)}`;

export const dropdownLinkColor = grayDark;
export const dropdownLinkHoverColor = darken(0.05, grayDark);
export const dropdownLinkHoverBg = grayLightest;

export const $dropdownLinkActiveColor = componentActiveColor;
export const $dropdownLinkActiveBg = componentActiveBg;

export const $dropdownLinkDisabledColor = grayLight;

export const $dropdownItemPaddingY = '.25rem';
export const dropdownItemPaddingX = '1.5rem';

export const dropdownHeaderColor = grayLight;

// Alerts
//
// Define alert colors, border radius, and padding.

export const alertPaddingY = '.75rem';
export const alertPaddingX = '1.25rem';
export const alertMarginBottom = '1rem';
export const alertBorderRadius = borderRadius;
export const alertLinkFontWeight = fontWeightBold;
export const alertBorderWidth = borderWidth;

export const alertSuccessBg = stateSuccessBg;
export const alertSuccessText = stateSuccessText;
export const alertSuccessBorderColor = stateSuccessBorderColor;

export const alertInfoBg = stateInfoBg;
export const alertInfoText = stateInfoText;
export const alertInfoBorderColor = stateInfoBorderColor;

export const alertWarningBg = stateWarningBg;
export const alertWarningText = stateWarningText;
export const alertWarningBorderColor = stateWarningBorderColor;

export const alertDangerBg = stateDangerBg;
export const alertDangerText = stateDangerText;
export const alertDangerBorderColor = stateDangerBorderColor;

// Grid columns
//
// Set the number of columns and specify the width of the gutters.

export const gridColumns = 12;
export const gridGutterWidthBase = '30px';
export const gridGutterWidths = {
  xs: gridGutterWidthBase,
  sm: gridGutterWidthBase,
  md: gridGutterWidthBase,
  lg: gridGutterWidthBase,
  xl: gridGutterWidthBase
};

// Breadcrumbs

export const breadcrumbPaddingY = '.75rem';
export const breadcrumbPaddingX = '1rem';
export const breadcrumbItemPadding = '.5rem';
export const breadcrumbBg = grayLighter;
export const breadcrumbDividerColor = grayLight;
export const breadcrumbActiveColor = grayLight;
export const breadcrumbDivider = '"/"';

// Cards

export const cardSpacerY = '.75rem';
export const cardSpacerX = '1.25rem';
export const cardBorderWidth = '1px';
export const cardBorderRadius = borderRadius;
export const cardBorderColor = sassRgba(black, 0.125);
export const cardInnerBorderRadius = `calc(${stripUnit(
  () => cardBorderRadius
)}px - ${stripUnit(() => cardBorderWidth)})}px)`;
export const cardCapBg = grayLightest;
export const cardBg = white;

export const cardInverseLinkHoverColor = white;

export const cardImgOverlayPadding = '1.25rem';

export const cardDeckMargin = gridGutterWidthBase / 2;

export const cardColumnsCount = 3;
export const cardColumnsGap = '1.25rem';
export const cardColumnsMargin = cardSpacerY;
