// @flow

import { darken, lighten, stripUnit } from 'polished';

import { sassRgba } from './utils/sassRgba';

// General variable structure

// Colors
//
// Grayscale and brand colors for use across Bootstrap.

// Start with assigning color names to specific hex values.

export const white = '#fff';
export const gray100 = '#f8f9fa';
export const gray200 = '#e9ecef';
export const gray300 = '#dee2e6';
export const gray400 = '#ced4da';
export const gray500 = '#adb5bd';
export const gray600 = '#868e96';
export const gray700 = '#495057';
export const gray800 = '#343a40';
export const gray900 = '#212529';
export const black = '#000';

export const blue = '#007bff';
export const indigo = '#6610f2';
export const purple = '#6f42c1';
export const pink = '#e83e8c';
export const red = '#dc3545';
export const orange = '#fd7e14';
export const yellow = '#ffc107';
export const green = '#28a745';
export const teal = '#20c997';
export const cyan = '#17a2b8';

export const colors = {
  blue,
  indigo,
  purple,
  pink,
  red,
  orange,
  yellow,
  green,
  teal,
  cyan,
  white,
  gray: gray600,
  gray900: gray800
};

export const themeColors = {
  primary: blue,
  secondary: gray600,
  success: green,
  info: cyan,
  warning: yellow,
  danger: red,
  light: gray100,
  dark: gray800
};

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

export const spacer = '1rem';
export const spacers = {
  s0: 0,
  s1: `${stripUnit(spacer) * 0.25}rem`,
  s2: `${stripUnit(spacer) * 0.5}rem`,
  s3: spacer,
  s4: `${stripUnit(spacer) * 1.5}rem`,
  s5: `${stripUnit(spacer) * 3}rem`
};

export const borderWidth = '1px';

// This variable affects the `.h-*` and `.w-*` classes.
// export const sizes = {
//   s25: '25%',
//   s50: '50%',
//   s75: '75%',
//   s100: '100%'
// };

// Body
//
// Settings for the `<body>` element.

export const bodyBg = white;
export const bodyColor = gray900;

// Links
//
// Style anchor elements.

export const linkColor = themeColors.primary;
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
export const componentActiveBg = themeColors.primary;

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

export const headingsMarginBottom = `${stripUnit(spacer) / 2}rem`;
export const headingsFontFamily = 'inherit';
export const headingsFontWeight = 500;
export const headingsLineHeight = 1.1;
export const headingsColor = 'inherit';

export const zindexDropdown = 1000;
export const zindexSticky = 1020;
export const zindexFixed = 1030;
export const zindexModalBackdrop = 1040;
export const zindexModal = 1050;
export const zindexPopover = 1060;
export const zindexTooltip = 1070;

// Navs

export const navLinkPaddingY = '.5rem';
export const navLinkPaddingX = '1rem';
export const navLinkDisabledColor = gray600;

export const navTabsBorderColor = '#ddd';
export const navTabsBorderWidth = borderWidth;
export const navTabsBorderRadius = borderRadius;
export const navTabsLinkHoverBorderColor = gray200;
export const navTabsLinkActiveColor = gray700;
export const navTabsLinkActiveBg = bodyBg;
export const navTabsLinkActiveBorderColor = '#ddd';

export const navPillsBorderRadius = borderRadius;
export const navPillsLinkActiveColor = componentActiveColor;
export const navPillsLinkActiveBg = componentActiveBg;

// Navbar

export const navbarPaddingY = `${stripUnit(spacer) / 2}rem`;
export const navbarPaddingX = spacer;

export const navbarBrandFontSize = fontSizeLg;
// Compute the navbarBrand paddingY so the navbarBrand will have the same height as navbar-text and navLink
export const navLinkHeight = `${stripUnit(navbarBrandFontSize) *
  lineHeightBase}rem`;

export const navbarBrandHeight = `${stripUnit(fontSizeBase) * lineHeightBase +
  stripUnit(navLinkPaddingY) * 2} rem`;

export const navbarBrandPaddingY = `${(stripUnit(navbarBrandHeight) -
  stripUnit(navLinkHeight)) /
  2}rem`;

export const navbarTogglerPaddingY = '.25rem';
export const navbarTogglerPaddingX = '.75rem';
export const navbarTogglerFontSize = fontSizeLg;
export const navbarTogglerBorderRadius = borderRadius;

export const navbarDarkColor = sassRgba(white, 0.5);
export const navbarDarkHoverColor = sassRgba(white, 0.75);
export const navbarDarkActiveColor = sassRgba(white, 1);
export const navbarDarkDisabledColor = sassRgba(white, 0.25);
export const navbarDarkTogglerIconBg = `url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='${navbarDarkColor}' strokeWidth='2' strokeLinecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")`;
export const navbarDarkTogglerBorderColor = sassRgba(white, 0.1);

export const navbarLightColor = sassRgba(black, 0.5);
export const navbarLightHoverColor = sassRgba(black, 0.7);
export const navbarLightActiveColor = sassRgba(black, 0.9);
export const navbarLightDisabledColor = sassRgba(black, 0.3);
export const navbarLightTogglerIconBg = `url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='${navbarLightColor}' strokeWidth='2' strokeLinecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")`;
export const navbarLightTogglerBorderColor = sassRgba(black, 0.1);

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
export const paginationHoverBg = gray200;
export const paginationHoverBorderColor = '#ddd';

export const paginationActiveColor = white;
export const paginationActiveBg = themeColors.primary;
export const paginationActiveBorderColor = themeColors.primary;

export const paginationDisabledColor = gray600;
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

export const badgeDefaultBg = gray600;
export const badgePrimaryBg = themeColors.primary;
export const badgeSuccessBg = themeColors.success;
export const badgeInfoBg = themeColors.info;
export const badgeWarningBg = themeColors.warning;
export const badgeDangerBg = themeColors.danger;

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
export const btnFocusBoxShadow = `0 0 0 2px ${sassRgba(
  themeColors.primary,
  0.25
)}`;
export const btnActiveBoxShadow = `inset 0 3px 5px rgba($black,.125)`;

export const btnPrimaryColor = white;
export const btnPrimaryBg = themeColors.primary;
export const btnPrimaryBorderColor = btnPrimaryBg;

export const btnSecondaryColor = gray900;
export const btnSecondaryBg = white;
export const btnSecondaryBorderColor = '#ccc';

export const btnInfoColor = white;
export const btnInfoBg = themeColors.info;
export const btnInfoBorderColor = btnInfoBg;

export const btnSuccessColor = white;
export const btnSuccessBg = themeColors.success;
export const btnSuccessBorderColor = btnSuccessBg;

export const btnWarningColor = white;
export const btnWarningBg = themeColors.warning;
export const btnWarningBorderColor = btnWarningBg;

export const btnDangerColor = white;
export const btnDangerBg = themeColors.danger;
export const btnDangerBorderColor = btnDangerBg;

export const btnLinkDisabledColor = gray600;

export const btnBlockSpacingY = '.5rem';

// Allows for customizing button radius independently from global border radius
export const btnBorderRadius = borderRadius;
export const btnBorderRadiusLg = borderRadiusLg;
export const btnBorderRadiusSm = borderRadiusSm;

export const btnTransition = 'all .2s ease-in-out';

// Forms

export const inputBg = white;
export const inputBgDisabled = gray200;

export const inputColor = gray700;
export const inputBorderColor = sassRgba(black, 0.15);
export const inputBtnBorderWidth = borderWidth; // For form controls ans
export const inputBoxShadow = `inset 0 1px 1px ${sassRgba(black, 0.075)}`;

export const inputBorderRadius = borderRadius;
export const inputBorderRadiusLg = borderRadiusLg;
export const inputBorderRadiusSm = borderRadiusSm;
export const inputBgFocus = inputBg;
export const inputBorderColorFocus = lighten(0.25, themeColors.primary);
export const inputBoxShadowFocus = `${inputBoxShadow}, ${sassRgba(
  inputBorderColorFocus,
  0.6
)}`;
export const inputColorFocus = inputColor;
export const inputColorPlaceholder = gray600;

export const inputHeight = `${stripUnit(fontSizeBase) * inputBtnLineHeight +
  stripUnit(inputBtnPaddingY) * 2}rem`;

export const inputHeightLg = `${stripUnit(fontSizeLg) * inputBtnLineHeightLg +
  stripUnit(inputBtnPaddingYlg) * 2}rem`;

export const inputHeightSm = `${stripUnit(fontSizeSm) * inputBtnLineHeightSm +
  stripUnit(inputBtnPaddingYsm) * 2}rem`;

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
export const dropdownDividerBg = gray200;
export const dropdownBoxShadow = `0 .5rem 1rem ${sassRgba(black, 0.175)}`;

export const dropdownLinkColor = gray900;
export const dropdownLinkHoverColor = darken(0.05, gray900);
export const dropdownLinkHoverBg = gray100;

export const dropdownLinkActiveColor = componentActiveColor;
export const dropdownLinkActiveBg = componentActiveBg;

export const dropdownLinkDisabledColor = gray600;

export const dropdownItemPaddingY = '.25rem';
export const dropdownItemPaddingX = '1.5rem';

export const dropdownHeaderColor = gray600;

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

// Progress bars

export const progressHeight = '1rem';
export const progressFontSize = '.75rem';
export const progressBg = gray200;
export const progressBorderRadius = borderRadius;
export const progressBoxShadow = `inset 0 .1rem .1rem ${sassRgba(black, 0.1)}`;
export const progressBarColor = white;
export const progressBarBg = themeColors.primary;
export const progressBarAnimationTiming = '1s linear infinite';
export const progressBarTransition = 'width .6s ease';

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
export const breadcrumbBg = gray200;
export const breadcrumbDividerColor = gray600;
export const breadcrumbActiveColor = gray600;
export const breadcrumbDivider = '"/"';

// Jumbotron

export const jumbotronPadding = '2rem';
export const jumbotronBg = gray200;

// Cards

export const cardSpacerY = '.75rem';
export const cardSpacerX = '1.25rem';
export const cardBorderWidth = '1px';
export const cardBorderRadius = borderRadius;
export const cardBorderColor = sassRgba(black, 0.125);
export const cardInnerBorderRadius = `calc(${stripUnit(
  () => cardBorderRadius
)}px - ${stripUnit(() => cardBorderWidth)})}px)`;
export const cardCapBg = gray600;
export const cardBg = white;

export const cardInverseLinkHoverColor = white;

export const cardImgOverlayPadding = '1.25rem';

export const cardDeckMargin = `${stripUnit(gridGutterWidthBase) / 2}px`;

export const cardColumnsCount = 3;
export const cardColumnsGap = '1.25rem';
export const cardColumnsMargin = cardSpacerY;
