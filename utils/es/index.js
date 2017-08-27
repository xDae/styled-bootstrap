import { darken, lighten, mix, parseToRgb, rgba, stripUnit } from 'polished';
import { css } from 'styled-components';

//      

function sassRgba(color, alpha) {
  return rgba(Object.assign(parseToRgb(color), { alpha: alpha }));
}

//      

// General variable structure

// Colors
//
// Grayscale and brand colors for use across Bootstrap.

// Start with assigning color names to specific hex values.

var white = '#fff';
var gray100 = '#f8f9fa';
var gray200 = '#e9ecef';
var gray300 = '#dee2e6';
var gray400 = '#ced4da';
var gray500 = '#adb5bd';
var gray600 = '#868e96';
var gray700 = '#495057';
var gray800 = '#343a40';
var gray900 = '#212529';
var black = '#000';

var blue = '#007bff';
var indigo = '#6610f2';
var purple = '#6f42c1';
var pink = '#e83e8c';
var red = '#dc3545';
var orange = '#fd7e14';
var yellow = '#ffc107';
var green = '#28a745';
var teal = '#20c997';
var cyan = '#17a2b8';

var colors = {
  blue: blue,
  indigo: indigo,
  purple: purple,
  pink: pink,
  red: red,
  orange: orange,
  yellow: yellow,
  green: green,
  teal: teal,
  cyan: cyan,
  white: white,
  gray: gray600,
  grayDark: gray800
};

var themeColors = {
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

var enableRounded = true;
var enableShadows = false;
var enableGradients = false;
var enableTransitions = true;
var enableHoverMediaQuery = false;
var enableGridClasses = true;
var enablePrintStyles = true;

// Spacing
//
// Control the default styling of most Bootstrap elements by modifying these
// variables. Mostly focused on spacing.
// You can add more entries to the $spacers map, should you need more variation.

var spacer = 1;
var spacers = {
  s0: 0,
  s1: spacer * 0.25 + 'rem',
  s2: spacer * 0.5 + 'rem',
  s3: spacer,
  s4: spacer * 1.5 + 'rem',
  s5: spacer * 3 + 'rem'
};

var borderWidth = '1px';

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

var bodyBg = white;
var bodyColor = gray900;

// Links
//
// Style anchor elements.

var linkColor = themeColors.primary;
var linkDecoration = 'none';
var linkHoverColor = darken(0.15, linkColor);
var linkHoverDecoration = 'underline';

// Components
//
// Define common padding and border radius sizes and more.

var lineHeightLg = 4 / 3;
var lineHeightSm = 1.5;

var borderRadius = '0.25rem';
var borderRadiusLg = '0.3rem';
var borderRadiusSm = '0.2rem';

var componentActiveColor = white;
var componentActiveBg = themeColors.primary;

var caretWidth = '0.3em';

var transitionBase = 'all .2s ease-in-out';
var transitionFade = 'opacity 0.15s linear';
var transitionCollapse = 'height 0.35s ease';

// Fonts
//
// Font, lineHeight, and color for body text, headings, and more.

var fontFamilySansSerif = '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
var fontFamilySerif = 'Georgia, "Times New Roman", Times, serif';
var fontFamilyMonnospace = 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
var fontFamilyBase = fontFamilySansSerif;

var fontSizeBase = '1rem';
var fontSizeLg = '1.25rem';
var fontSizeSm = '0.875rem';
var fontSizeXs = '0.75rem';

var fontWeightNormal = 'normal';
var fontWeightBold = 'bold';

var fontWeightBase = fontWeightNormal;
var lineHeightBase = 1.5;

var fontSizeH1 = '2.5rem';
var fontSizeH2 = '2rem';
var fontSizeH3 = '1.75rem';
var fontSizeH4 = '1.5rem';
var fontSizeH5 = '1.25rem';
var fontSizeH6 = '1rem';

var headingsMarginBottom = spacer / 2 + 'rem';
var headingsFontFamily = 'inherit';
var headingsFontWeight = 500;
var btnBoxShadow = 'inset 0 1px 0 rgba(' + white + ',.15), 0 1px 1px ' + sassRgba(black, 0.075);
var headingsLineHeight = 1.1;
var headingsColor = 'inherit';

var zindexDropdown = 1000;
var zindexSticky = 1020;
var zindexFixed = 1030;
var zindexModalBackdrop = 1040;
var zindexModal = 1050;
var zindexPopover = 1060;
var zindexTooltip = 1070;

// Navs

var navLinkPaddingY = '.5rem';
var navLinkPaddingX = '1rem';
var navLinkDisabledColor = gray600;

var navTabsBorderColor = '#ddd';
var navTabsBorderWidth = borderWidth;
var navTabsBorderRadius = borderRadius;
var navTabsLinkHoverBorderColor = gray200;
var navTabsLinkActiveColor = gray700;
var navTabsLinkActiveBg = bodyBg;
var navTabsLinkActiveBorderColor = '#ddd';

var navPillsBorderRadius = borderRadius;
var navPillsLinkActiveColor = componentActiveColor;
var navPillsLinkActiveBg = componentActiveBg;

// Navbar

var navbarPaddingY = spacer / 2 + 'rem';
var navbarPaddingX = spacer;

var navbarBrandFontSize = fontSizeLg;
// Compute the navbarBrand paddingY so the navbarBrand will have the same height as navbar-text and navLink
var navLinkHeight = stripUnit(navbarBrandFontSize) * lineHeightBase + 'rem';

var navbarBrandHeight = stripUnit(fontSizeBase) * lineHeightBase + navLinkPaddingY * 2 + 'rem';

var navbarBrandPaddingY = (stripUnit(navbarBrandHeight) - navLinkHeight) / 2 + 'rem';

var navbarTogglerPaddingY = '.25rem';
var navbarTogglerPaddingX = '.75rem';
var navbarTogglerFontSize = fontSizeLg;
var navbarTogglerBorderRadius = borderRadius;

var navbarDarkColor = sassRgba(white, 0.5);
var navbarDarkHoverColor = sassRgba(white, 0.75);
var navbarDarkActiveColor = sassRgba(white, 1);
var navbarDarkDisabledColor = sassRgba(white, 0.25);
var navbarDarkTogglerIconBg = 'url("data:image/svg+xml;charset=utf8,%3Csvg viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath stroke=\'' + navbarDarkColor + '\' strokeWidth=\'2\' strokeLinecap=\'round\' stroke-miterlimit=\'10\' d=\'M4 7h22M4 15h22M4 23h22\'/%3E%3C/svg%3E")';
var navbarDarkTogglerBorderColor = sassRgba(white, 0.1);

var navbarLightColor = sassRgba(black, 0.5);
var navbarLightHoverColor = sassRgba(black, 0.7);
var navbarLightActiveColor = sassRgba(black, 0.9);
var navbarLightDisabledColor = sassRgba(black, 0.3);
var navbarLightTogglerIconBg = 'url("data:image/svg+xml;charset=utf8,%3Csvg viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath stroke=\'' + navbarLightColor + '\' strokeWidth=\'2\' strokeLinecap=\'round\' stroke-miterlimit=\'10\' d=\'M4 7h22M4 15h22M4 23h22\'/%3E%3C/svg%3E")';
var navbarLightTogglerBorderColor = sassRgba(black, 0.1);

// Pagination

var paginationPaddingY = '.5rem';
var paginationPaddingX = '.75rem';
var paginationPaddingYsm = '.25rem';
var paginationPaddingXsm = '.5rem';
var paginationPaddingYlg = '.75rem';
var paginationPaddingXlg = '1.5rem';
var paginationLineHeight = '1.25';

var paginationColor = linkColor;
var paginationBg = white;
var paginationBorderWidth = borderWidth;
var paginationBorderColor = '#ddd';

var paginationHoverColor = linkHoverColor;
var paginationHoverBg = gray200;
var paginationHoverBorderColor = '#ddd';

var paginationActiveColor = white;
var paginationActiveBg = themeColors.primary;
var paginationActiveBorderColor = themeColors.primary;

var paginationDisabledColor = gray600;
var paginationDisabledBg = white;
var paginationDisabledBorderColor = '#ddd';

// Form states and alerts
//
// Define colors for form feedback states and, by default, alerts.

var stateSuccessText = '#3c763d';
var stateSuccessBg = '#dff0d8';
var stateSuccessBorderColor = darken(0.05, stateSuccessBg);

var stateInfoText = '#31708f';
var stateInfoBg = '#d9edf7';
var stateInfoBorderColor = darken(0.07, stateInfoBg);

var stateWarningText = '#8a6d3b';
var stateWarningBg = '#fcf8e3';
var markBg = stateWarningBg;
var stateWarningBorderColor = darken(0.05, stateWarningBg);

var stateDangerText = '#a94442';
var stateDangerBg = '#f2dede';
var stateDangerBorderColor = darken(0.05, stateDangerBg);

// Badges

var badgeDefaultBg = gray600;
var badgePrimaryBg = themeColors.primary;
var badgeSuccessBg = themeColors.success;
var badgeInfoBg = themeColors.info;
var badgeWarningBg = themeColors.warning;
var badgeDangerBg = themeColors.danger;

var badgeColor = white;
var badgeLinkHoverColor = white;
var badgeFontSize = '75%';
var badgeFontWeight = fontWeightBold;
var badgePaddingY = '.25em';
var badgePaddingX = '.4em';

var badgePillPaddingX = '.6em';
// Use a higher than normal value to ensure completely rounded edges when
// customizing padding or fontSize on labels.
var badgePillBorderRadius = '10rem';

// Buttons
//
// For each of Bootstrap's buttons, define text, background and border color.

var inputBtnPaddingY = '.5rem';
var inputBtnPaddingX = '1rem';
var inputBtnLineHeight = 1.25;

var inputBtnPaddingYsm = '.25rem';
var inputBtnPaddingXsm = '.5rem';
var inputBtnLineHeightSm = 1.5;

var inputBtnPaddingYlg = '.5rem';
var inputBtnPaddingXlg = '1rem';
var inputBtnLineHeightLg = 1.5;

var btnFontWeight = fontWeightNormal;
// export const btnBoxShadow = `inset 0 1px 0 ${sassRgba(
//   white,
//   0.15
// )}, 0 1px 1px ${sassRgba(black, 0.075)}`;
var btnFocusBoxShadow = '0 0 0 2px ' + sassRgba(themeColors.primary, 0.25);
var btnActiveBoxShadow = 'inset 0 3px 5px rgba($black,.125)';

var btnPrimaryColor = white;
var btnPrimaryBg = themeColors.primary;
var btnPrimaryBorderColor = btnPrimaryBg;

var btnSecondaryColor = gray900;
var btnSecondaryBg = white;
var btnSecondaryBorderColor = '#ccc';

var btnInfoColor = white;
var btnInfoBg = themeColors.info;
var btnInfoBorderColor = btnInfoBg;

var btnSuccessColor = white;
var btnSuccessBg = themeColors.success;
var btnSuccessBorderColor = btnSuccessBg;

var btnWarningColor = white;
var btnWarningBg = themeColors.warning;
var btnWarningBorderColor = btnWarningBg;

var btnDangerColor = white;
var btnDangerBg = themeColors.danger;
var btnDangerBorderColor = btnDangerBg;

var btnLinkDisabledColor = gray600;

var btnBlockSpacingY = '.5rem';

// Allows for customizing button radius independently from global border radius
var btnBorderRadius = borderRadius;
var btnBorderRadiusLg = borderRadiusLg;
var btnBorderRadiusSm = borderRadiusSm;

var btnTransition = 'all .2s ease-in-out';

// Forms

var inputBg = white;
var inputBgDisabled = gray200;

var inputColor = gray700;
var inputBorderColor = sassRgba(black, 0.15);
var inputBtnBorderWidth = borderWidth; // For form controls ans
var inputBoxShadow = 'inset 0 1px 1px ' + sassRgba(black, 0.075);

var inputBorderRadius = borderRadius;
var inputBorderRadiusLg = borderRadiusLg;
var inputBorderRadiusSm = borderRadiusSm;
var inputBgFocus = inputBg;
var inputBorderColorFocus = lighten(0.25, themeColors.primary);
var inputBoxShadowFocus = inputBoxShadow + ', ' + sassRgba(inputBorderColorFocus, 0.6);
var inputColorFocus = inputColor;
var inputColorPlaceholder = gray600;

var inputHeight = stripUnit(fontSizeBase) * inputBtnLineHeight + stripUnit(inputBtnPaddingY) * 2 + 'rem';

var inputHeightLg = stripUnit(fontSizeLg) * inputBtnLineHeightLg + stripUnit(inputBtnPaddingYlg) * 2 + 'rem';

var inputHeightSm = stripUnit(fontSizeSm) * inputBtnLineHeightSm + stripUnit(inputBtnPaddingYsm) * 2 + 'rem';

var inputTransition = 'borderColor ease-in-out .15s, box-shadow ease-in-out .15s';

// Dropdowns
//
// Dropdown menu container and contents.

var dropdownMinWidth = '10rem';
var dropdownPaddingY = '.5rem';
var dropdownMarginTop = '.125rem';
var dropdownBg = white;
var dropdownBorderColor = sassRgba(black, 0.15);
var dropdownBorderWidth = borderWidth;
var dropdownDividerBg = gray200;
var dropdownBoxShadow = '0 .5rem 1rem ' + sassRgba(black, 0.175);

var dropdownLinkColor = gray900;
var dropdownLinkHoverColor = darken(0.05, gray900);
var dropdownLinkHoverBg = gray100;

var dropdownLinkActiveColor = componentActiveColor;
var dropdownLinkActiveBg = componentActiveBg;

var dropdownLinkDisabledColor = gray600;

var dropdownItemPaddingY = '.25rem';
var dropdownItemPaddingX = '1.5rem';

var dropdownHeaderColor = gray600;

// Alerts
//
// Define alert colors, border radius, and padding.

var alertPaddingY = '.75rem';
var alertPaddingX = '1.25rem';
var alertMarginBottom = '1rem';
var alertBorderRadius = borderRadius;
var alertLinkFontWeight = fontWeightBold;
var alertBorderWidth = borderWidth;

var alertSuccessBg = stateSuccessBg;
var alertSuccessText = stateSuccessText;
var alertSuccessBorderColor = stateSuccessBorderColor;

var alertInfoBg = stateInfoBg;
var alertInfoText = stateInfoText;
var alertInfoBorderColor = stateInfoBorderColor;

var alertWarningBg = stateWarningBg;
var alertWarningText = stateWarningText;
var alertWarningBorderColor = stateWarningBorderColor;

var alertDangerBg = stateDangerBg;
var alertDangerText = stateDangerText;
var alertDangerBorderColor = stateDangerBorderColor;

// Progress bars

var progressHeight = '1rem';
var progressFontSize = '.75rem';
var progressBg = gray200;
var progressBorderRadius = borderRadius;
var progressBoxShadow = 'inset 0 .1rem .1rem ' + sassRgba(black, 0.1);
var progressBarColor = white;
var progressBarBg = themeColors.primary;
var progressBarAnimationTiming = '1s linear infinite';
var progressBarTransition = 'width .6s ease';

// List group

var listGroupBg = white;
var listGroupBorderColor = sassRgba(black, 0.125);
var listGroupBorderWidth = borderWidth;
var listGroupBorderRadius = borderRadius;

var listGroupItemPaddingY = '.75rem';
var listGroupItemPaddingX = '1.25rem';

var listGroupHoverBg = gray100;
var listGroupActiveColor = componentActiveColor;
var listGroupActiveBg = componentActiveBg;
var listGroupActiveBordeColor = listGroupActiveBg;

var listGroupDisabledColor = gray600;
var listGroupDisableddBg = listGroupBg;

var listGroupActionColor = gray700;
var listGroupActionHoverColor = listGroupActionColor;

var listGroupActionActiveColor = bodyColor;
var listGroupActionActiveBg = gray200;

// Grid columns
//
// Set the number of columns and specify the width of the gutters.

var gridColumns = 12;
var gridGutterWidthBase = '30px';
var gridGutterWidths = {
  xs: gridGutterWidthBase,
  sm: gridGutterWidthBase,
  md: gridGutterWidthBase,
  lg: gridGutterWidthBase,
  xl: gridGutterWidthBase
};

// Breadcrumbs

var breadcrumbPaddingY = '.75rem';
var breadcrumbPaddingX = '1rem';
var breadcrumbItemPadding = '.5rem';
var breadcrumbBg = gray200;
var breadcrumbDividerColor = gray600;
var breadcrumbActiveColor = gray600;
var breadcrumbDivider = '"/"';

// Jumbotron

var jumbotronPadding = '2rem';
var jumbotronBg = gray200;

// Cards

var cardSpacerY = '.75rem';
var cardSpacerX = '1.25rem';
var cardBorderWidth = '1px';
var cardBorderRadius = borderRadius;
var cardBorderColor = sassRgba(black, 0.125);
var cardInnerBorderRadius = 'calc(' + stripUnit(cardBorderRadius) + 'px - ' + stripUnit(cardBorderWidth) + ')}px)';
var cardCapBg = sassRgba(black, 0.03);
var cardBg = white;

var cardInverseLinkHoverColor = white;

var cardImgOverlayPadding = '1.25rem';

var cardDeckMargin = stripUnit(gridGutterWidthBase) / 2 + 'px';

var cardColumnsCount = 3;
var cardColumnsGap = '1.25rem';
var cardColumnsMargin = cardSpacerY;

var defaultTheme = Object.freeze({
	white: white,
	gray100: gray100,
	gray200: gray200,
	gray300: gray300,
	gray400: gray400,
	gray500: gray500,
	gray600: gray600,
	gray700: gray700,
	gray800: gray800,
	gray900: gray900,
	black: black,
	blue: blue,
	indigo: indigo,
	purple: purple,
	pink: pink,
	red: red,
	orange: orange,
	yellow: yellow,
	green: green,
	teal: teal,
	cyan: cyan,
	colors: colors,
	themeColors: themeColors,
	enableRounded: enableRounded,
	enableShadows: enableShadows,
	enableGradients: enableGradients,
	enableTransitions: enableTransitions,
	enableHoverMediaQuery: enableHoverMediaQuery,
	enableGridClasses: enableGridClasses,
	enablePrintStyles: enablePrintStyles,
	spacer: spacer,
	spacers: spacers,
	borderWidth: borderWidth,
	bodyBg: bodyBg,
	bodyColor: bodyColor,
	linkColor: linkColor,
	linkDecoration: linkDecoration,
	linkHoverColor: linkHoverColor,
	linkHoverDecoration: linkHoverDecoration,
	lineHeightLg: lineHeightLg,
	lineHeightSm: lineHeightSm,
	borderRadius: borderRadius,
	borderRadiusLg: borderRadiusLg,
	borderRadiusSm: borderRadiusSm,
	componentActiveColor: componentActiveColor,
	componentActiveBg: componentActiveBg,
	caretWidth: caretWidth,
	transitionBase: transitionBase,
	transitionFade: transitionFade,
	transitionCollapse: transitionCollapse,
	fontFamilySansSerif: fontFamilySansSerif,
	fontFamilySerif: fontFamilySerif,
	fontFamilyMonnospace: fontFamilyMonnospace,
	fontFamilyBase: fontFamilyBase,
	fontSizeBase: fontSizeBase,
	fontSizeLg: fontSizeLg,
	fontSizeSm: fontSizeSm,
	fontSizeXs: fontSizeXs,
	fontWeightNormal: fontWeightNormal,
	fontWeightBold: fontWeightBold,
	fontWeightBase: fontWeightBase,
	lineHeightBase: lineHeightBase,
	fontSizeH1: fontSizeH1,
	fontSizeH2: fontSizeH2,
	fontSizeH3: fontSizeH3,
	fontSizeH4: fontSizeH4,
	fontSizeH5: fontSizeH5,
	fontSizeH6: fontSizeH6,
	headingsMarginBottom: headingsMarginBottom,
	headingsFontFamily: headingsFontFamily,
	headingsFontWeight: headingsFontWeight,
	btnBoxShadow: btnBoxShadow,
	headingsLineHeight: headingsLineHeight,
	headingsColor: headingsColor,
	zindexDropdown: zindexDropdown,
	zindexSticky: zindexSticky,
	zindexFixed: zindexFixed,
	zindexModalBackdrop: zindexModalBackdrop,
	zindexModal: zindexModal,
	zindexPopover: zindexPopover,
	zindexTooltip: zindexTooltip,
	navLinkPaddingY: navLinkPaddingY,
	navLinkPaddingX: navLinkPaddingX,
	navLinkDisabledColor: navLinkDisabledColor,
	navTabsBorderColor: navTabsBorderColor,
	navTabsBorderWidth: navTabsBorderWidth,
	navTabsBorderRadius: navTabsBorderRadius,
	navTabsLinkHoverBorderColor: navTabsLinkHoverBorderColor,
	navTabsLinkActiveColor: navTabsLinkActiveColor,
	navTabsLinkActiveBg: navTabsLinkActiveBg,
	navTabsLinkActiveBorderColor: navTabsLinkActiveBorderColor,
	navPillsBorderRadius: navPillsBorderRadius,
	navPillsLinkActiveColor: navPillsLinkActiveColor,
	navPillsLinkActiveBg: navPillsLinkActiveBg,
	navbarPaddingY: navbarPaddingY,
	navbarPaddingX: navbarPaddingX,
	navbarBrandFontSize: navbarBrandFontSize,
	navLinkHeight: navLinkHeight,
	navbarBrandHeight: navbarBrandHeight,
	navbarBrandPaddingY: navbarBrandPaddingY,
	navbarTogglerPaddingY: navbarTogglerPaddingY,
	navbarTogglerPaddingX: navbarTogglerPaddingX,
	navbarTogglerFontSize: navbarTogglerFontSize,
	navbarTogglerBorderRadius: navbarTogglerBorderRadius,
	navbarDarkColor: navbarDarkColor,
	navbarDarkHoverColor: navbarDarkHoverColor,
	navbarDarkActiveColor: navbarDarkActiveColor,
	navbarDarkDisabledColor: navbarDarkDisabledColor,
	navbarDarkTogglerIconBg: navbarDarkTogglerIconBg,
	navbarDarkTogglerBorderColor: navbarDarkTogglerBorderColor,
	navbarLightColor: navbarLightColor,
	navbarLightHoverColor: navbarLightHoverColor,
	navbarLightActiveColor: navbarLightActiveColor,
	navbarLightDisabledColor: navbarLightDisabledColor,
	navbarLightTogglerIconBg: navbarLightTogglerIconBg,
	navbarLightTogglerBorderColor: navbarLightTogglerBorderColor,
	paginationPaddingY: paginationPaddingY,
	paginationPaddingX: paginationPaddingX,
	paginationPaddingYsm: paginationPaddingYsm,
	paginationPaddingXsm: paginationPaddingXsm,
	paginationPaddingYlg: paginationPaddingYlg,
	paginationPaddingXlg: paginationPaddingXlg,
	paginationLineHeight: paginationLineHeight,
	paginationColor: paginationColor,
	paginationBg: paginationBg,
	paginationBorderWidth: paginationBorderWidth,
	paginationBorderColor: paginationBorderColor,
	paginationHoverColor: paginationHoverColor,
	paginationHoverBg: paginationHoverBg,
	paginationHoverBorderColor: paginationHoverBorderColor,
	paginationActiveColor: paginationActiveColor,
	paginationActiveBg: paginationActiveBg,
	paginationActiveBorderColor: paginationActiveBorderColor,
	paginationDisabledColor: paginationDisabledColor,
	paginationDisabledBg: paginationDisabledBg,
	paginationDisabledBorderColor: paginationDisabledBorderColor,
	stateSuccessText: stateSuccessText,
	stateSuccessBg: stateSuccessBg,
	stateSuccessBorderColor: stateSuccessBorderColor,
	stateInfoText: stateInfoText,
	stateInfoBg: stateInfoBg,
	stateInfoBorderColor: stateInfoBorderColor,
	stateWarningText: stateWarningText,
	stateWarningBg: stateWarningBg,
	markBg: markBg,
	stateWarningBorderColor: stateWarningBorderColor,
	stateDangerText: stateDangerText,
	stateDangerBg: stateDangerBg,
	stateDangerBorderColor: stateDangerBorderColor,
	badgeDefaultBg: badgeDefaultBg,
	badgePrimaryBg: badgePrimaryBg,
	badgeSuccessBg: badgeSuccessBg,
	badgeInfoBg: badgeInfoBg,
	badgeWarningBg: badgeWarningBg,
	badgeDangerBg: badgeDangerBg,
	badgeColor: badgeColor,
	badgeLinkHoverColor: badgeLinkHoverColor,
	badgeFontSize: badgeFontSize,
	badgeFontWeight: badgeFontWeight,
	badgePaddingY: badgePaddingY,
	badgePaddingX: badgePaddingX,
	badgePillPaddingX: badgePillPaddingX,
	badgePillBorderRadius: badgePillBorderRadius,
	inputBtnPaddingY: inputBtnPaddingY,
	inputBtnPaddingX: inputBtnPaddingX,
	inputBtnLineHeight: inputBtnLineHeight,
	inputBtnPaddingYsm: inputBtnPaddingYsm,
	inputBtnPaddingXsm: inputBtnPaddingXsm,
	inputBtnLineHeightSm: inputBtnLineHeightSm,
	inputBtnPaddingYlg: inputBtnPaddingYlg,
	inputBtnPaddingXlg: inputBtnPaddingXlg,
	inputBtnLineHeightLg: inputBtnLineHeightLg,
	btnFontWeight: btnFontWeight,
	btnFocusBoxShadow: btnFocusBoxShadow,
	btnActiveBoxShadow: btnActiveBoxShadow,
	btnPrimaryColor: btnPrimaryColor,
	btnPrimaryBg: btnPrimaryBg,
	btnPrimaryBorderColor: btnPrimaryBorderColor,
	btnSecondaryColor: btnSecondaryColor,
	btnSecondaryBg: btnSecondaryBg,
	btnSecondaryBorderColor: btnSecondaryBorderColor,
	btnInfoColor: btnInfoColor,
	btnInfoBg: btnInfoBg,
	btnInfoBorderColor: btnInfoBorderColor,
	btnSuccessColor: btnSuccessColor,
	btnSuccessBg: btnSuccessBg,
	btnSuccessBorderColor: btnSuccessBorderColor,
	btnWarningColor: btnWarningColor,
	btnWarningBg: btnWarningBg,
	btnWarningBorderColor: btnWarningBorderColor,
	btnDangerColor: btnDangerColor,
	btnDangerBg: btnDangerBg,
	btnDangerBorderColor: btnDangerBorderColor,
	btnLinkDisabledColor: btnLinkDisabledColor,
	btnBlockSpacingY: btnBlockSpacingY,
	btnBorderRadius: btnBorderRadius,
	btnBorderRadiusLg: btnBorderRadiusLg,
	btnBorderRadiusSm: btnBorderRadiusSm,
	btnTransition: btnTransition,
	inputBg: inputBg,
	inputBgDisabled: inputBgDisabled,
	inputColor: inputColor,
	inputBorderColor: inputBorderColor,
	inputBtnBorderWidth: inputBtnBorderWidth,
	inputBoxShadow: inputBoxShadow,
	inputBorderRadius: inputBorderRadius,
	inputBorderRadiusLg: inputBorderRadiusLg,
	inputBorderRadiusSm: inputBorderRadiusSm,
	inputBgFocus: inputBgFocus,
	inputBorderColorFocus: inputBorderColorFocus,
	inputBoxShadowFocus: inputBoxShadowFocus,
	inputColorFocus: inputColorFocus,
	inputColorPlaceholder: inputColorPlaceholder,
	inputHeight: inputHeight,
	inputHeightLg: inputHeightLg,
	inputHeightSm: inputHeightSm,
	inputTransition: inputTransition,
	dropdownMinWidth: dropdownMinWidth,
	dropdownPaddingY: dropdownPaddingY,
	dropdownMarginTop: dropdownMarginTop,
	dropdownBg: dropdownBg,
	dropdownBorderColor: dropdownBorderColor,
	dropdownBorderWidth: dropdownBorderWidth,
	dropdownDividerBg: dropdownDividerBg,
	dropdownBoxShadow: dropdownBoxShadow,
	dropdownLinkColor: dropdownLinkColor,
	dropdownLinkHoverColor: dropdownLinkHoverColor,
	dropdownLinkHoverBg: dropdownLinkHoverBg,
	dropdownLinkActiveColor: dropdownLinkActiveColor,
	dropdownLinkActiveBg: dropdownLinkActiveBg,
	dropdownLinkDisabledColor: dropdownLinkDisabledColor,
	dropdownItemPaddingY: dropdownItemPaddingY,
	dropdownItemPaddingX: dropdownItemPaddingX,
	dropdownHeaderColor: dropdownHeaderColor,
	alertPaddingY: alertPaddingY,
	alertPaddingX: alertPaddingX,
	alertMarginBottom: alertMarginBottom,
	alertBorderRadius: alertBorderRadius,
	alertLinkFontWeight: alertLinkFontWeight,
	alertBorderWidth: alertBorderWidth,
	alertSuccessBg: alertSuccessBg,
	alertSuccessText: alertSuccessText,
	alertSuccessBorderColor: alertSuccessBorderColor,
	alertInfoBg: alertInfoBg,
	alertInfoText: alertInfoText,
	alertInfoBorderColor: alertInfoBorderColor,
	alertWarningBg: alertWarningBg,
	alertWarningText: alertWarningText,
	alertWarningBorderColor: alertWarningBorderColor,
	alertDangerBg: alertDangerBg,
	alertDangerText: alertDangerText,
	alertDangerBorderColor: alertDangerBorderColor,
	progressHeight: progressHeight,
	progressFontSize: progressFontSize,
	progressBg: progressBg,
	progressBorderRadius: progressBorderRadius,
	progressBoxShadow: progressBoxShadow,
	progressBarColor: progressBarColor,
	progressBarBg: progressBarBg,
	progressBarAnimationTiming: progressBarAnimationTiming,
	progressBarTransition: progressBarTransition,
	listGroupBg: listGroupBg,
	listGroupBorderColor: listGroupBorderColor,
	listGroupBorderWidth: listGroupBorderWidth,
	listGroupBorderRadius: listGroupBorderRadius,
	listGroupItemPaddingY: listGroupItemPaddingY,
	listGroupItemPaddingX: listGroupItemPaddingX,
	listGroupHoverBg: listGroupHoverBg,
	listGroupActiveColor: listGroupActiveColor,
	listGroupActiveBg: listGroupActiveBg,
	listGroupActiveBordeColor: listGroupActiveBordeColor,
	listGroupDisabledColor: listGroupDisabledColor,
	listGroupDisableddBg: listGroupDisableddBg,
	listGroupActionColor: listGroupActionColor,
	listGroupActionHoverColor: listGroupActionHoverColor,
	listGroupActionActiveColor: listGroupActionActiveColor,
	listGroupActionActiveBg: listGroupActionActiveBg,
	gridColumns: gridColumns,
	gridGutterWidthBase: gridGutterWidthBase,
	gridGutterWidths: gridGutterWidths,
	breadcrumbPaddingY: breadcrumbPaddingY,
	breadcrumbPaddingX: breadcrumbPaddingX,
	breadcrumbItemPadding: breadcrumbItemPadding,
	breadcrumbBg: breadcrumbBg,
	breadcrumbDividerColor: breadcrumbDividerColor,
	breadcrumbActiveColor: breadcrumbActiveColor,
	breadcrumbDivider: breadcrumbDivider,
	jumbotronPadding: jumbotronPadding,
	jumbotronBg: jumbotronBg,
	cardSpacerY: cardSpacerY,
	cardSpacerX: cardSpacerX,
	cardBorderWidth: cardBorderWidth,
	cardBorderRadius: cardBorderRadius,
	cardBorderColor: cardBorderColor,
	cardInnerBorderRadius: cardInnerBorderRadius,
	cardCapBg: cardCapBg,
	cardBg: cardBg,
	cardInverseLinkHoverColor: cardInverseLinkHoverColor,
	cardImgOverlayPadding: cardImgOverlayPadding,
	cardDeckMargin: cardDeckMargin,
	cardColumnsCount: cardColumnsCount,
	cardColumnsGap: cardColumnsGap,
	cardColumnsMargin: cardColumnsMargin
});

//      

var themeColorInterval = 0.08;

// Color contrast
function colorYiq(color) {
  var r = parseToRgb(color).red;
  var g = parseToRgb(color).green;
  var b = parseToRgb(color).blue;

  var yiq = (r * 299 + g * 587 + b * 114) / 1000;

  if (yiq >= 150) {
    return '#111';
  }

  return '#fff';
}

// Retreive color
function getColor() {
  var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'blue';

  return colors[key];
}

function themeColor() {
  var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'primary';

  return themeColors[key];
}

// Request a theme color level
function themeColorLevel() {
  var colorName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'primary';
  var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var color = themeColor(colorName);
  var colorBase = level > 0 ? '#000' : '#fff';

  if (level < 0) {
    // Lighter values need a quick double negative for the Sass math to work
    return mix(level * -1 * themeColorInterval, colorBase, color);
  }

  return mix(level * themeColorInterval, colorBase, color);
}

var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var _templateObject = taggedTemplateLiteral(['\n      border-radius: ', ';\n    '], ['\n      border-radius: ', ';\n    ']);
var _templateObject2 = taggedTemplateLiteral(['\n      border-top-right-radius: ', ';\n      border-top-left-radius: ', ';\n    '], ['\n      border-top-right-radius: ', ';\n      border-top-left-radius: ', ';\n    ']);
var _templateObject3 = taggedTemplateLiteral(['\n      border-bottom-right-radius: ', ';\n      border-top-right-radius: ', ';\n    '], ['\n      border-bottom-right-radius: ', ';\n      border-top-right-radius: ', ';\n    ']);
var _templateObject4 = taggedTemplateLiteral(['\n      border-bottom-right-radius: ', ';\n      border-bottom-left-radius: ', ';\n    '], ['\n      border-bottom-right-radius: ', ';\n      border-bottom-left-radius: ', ';\n    ']);
var _templateObject5 = taggedTemplateLiteral(['\n      border-bottom-left-radius: ', ';\n      border-top-left-radius: ', ';\n    '], ['\n      border-bottom-left-radius: ', ';\n      border-top-left-radius: ', ';\n    ']);

//      

function borderRadius$1() {
  var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0.25rem';

  if (enableRounded) {
    return css(_templateObject, radius);
  }

  return '';
}

function borderTopRadius(radius) {
  if (enableRounded) {
    return css(_templateObject2, radius, radius);
  }
}

function borderRightRadius(radius) {
  if (enableRounded) {
    return css(_templateObject3, radius, radius);
  }
}

function borderBottomRadius(radius) {
  if (enableRounded) {
    return css(_templateObject4, radius, radius);
  }
}

function borderLeftRadius(radius) {
  if (enableRounded) {
    return css(_templateObject5, radius, radius);
  }
}

var _templateObject$1 = taggedTemplateLiteral(['\n  &:hover { ', ' }\n'], ['\n  &:hover { ', ' }\n']);
var _templateObject2$1 = taggedTemplateLiteral(['\n      &:focus { ', '} }\n      ', '\n    '], ['\n      &:focus { ', '} }\n      ', '\n    ']);
var _templateObject3$1 = taggedTemplateLiteral(['\n    &:focus,\n    &:hover {\n      ', '\n    }\n  '], ['\n    &:focus,\n    &:hover {\n      ', '\n    }\n  ']);
var _templateObject4$1 = taggedTemplateLiteral(['\n      &,\n      &:focus {\n        ', '\n      }\n      ', '\n    '], ['\n      &,\n      &:focus {\n        ', '\n      }\n      ', '\n    ']);
var _templateObject5$1 = taggedTemplateLiteral(['\n    &,\n    &:focus,\n    &:hover {\n      ', '\n    }\n  '], ['\n    &,\n    &:focus,\n    &:hover {\n      ', '\n    }\n  ']);
var _templateObject6 = taggedTemplateLiteral(['\n      &:focus,\n      &:active {\n        ', '\n      }\n      ', '\n    '], ['\n      &:focus,\n      &:active {\n        ', '\n      }\n      ', '\n    ']);
var _templateObject7 = taggedTemplateLiteral(['\n    &:focus,\n    &:active,\n    &:hover {\n      ', '\n    }\n  '], ['\n    &:focus,\n    &:active,\n    &:hover {\n      ', '\n    }\n  ']);

//       

var hover = function hover(content) {
  return css(_templateObject$1, content);
};

var hoverFocus = function hoverFocus(content) {
  if (enableHoverMediaQuery) {
    return css(_templateObject2$1, content, hover(content));
  }

  return css(_templateObject3$1, content);
};

var plainHoverFocus = function plainHoverFocus(content) {
  if (enableHoverMediaQuery) {
    return css(_templateObject4$1, content, hover(content));
  }

  return css(_templateObject5$1, content);
};

var hoverFocusActive = function hoverFocusActive(content) {
  if (enableHoverMediaQuery) {
    return css(_templateObject6, content, hover(content));
  }

  return css(_templateObject7, content);
};

var _templateObject$2 = taggedTemplateLiteral(['\n      box-shadow: ', ';\n    '], ['\n      box-shadow: ', ';\n    ']);

function boxShadow(shadow) {
  if (enableShadows) {
    return css(_templateObject$2, shadow);
  }

  return null;
}

var _templateObject$3 = taggedTemplateLiteral(['\n      transition: ', ';\n    '], ['\n      transition: ', ';\n    ']);
var _templateObject2$2 = taggedTemplateLiteral(['\n    transition: ', ';\n  '], ['\n    transition: ', ';\n  ']);

var transition = function transition(transitionType) {
  if (enableTransitions) {
    return css(_templateObject$3, transitionBase);
  }

  return css(_templateObject2$2, transitionType);
};

var _templateObject$4 = taggedTemplateLiteral(['\n    background-image: linear-gradient(', ', ', ' 25%, transparent 25%, transparent 50%, ', ' 50%, ', ' 75%, transparent 75%, transparent);\n  '], ['\n    background-image: linear-gradient(', ', ', ' 25%, transparent 25%, transparent 50%, ', ' 50%, ', ' 75%, transparent 75%, transparent);\n  ']);

//      

// @mixin gradient-x($start-color: #555, $end-color: #333, $start-percent: 0%, $end-percent: 100%) {
//   background-image: linear-gradient(to right, $start-color $start-percent, $end-color $end-percent);
//   background-repeat: repeat-x;
// }

// // Vertical gradient, from top to bottom
// //
// // Creates two color stops, start and end, by specifying a color and position for each color stop.
// @mixin gradient-y($start-color: #555, $end-color: #333, $start-percent: 0%, $end-percent: 100%) {
//   background-image: linear-gradient(to bottom, $start-color $start-percent, $end-color $end-percent);
//   background-repeat: repeat-x;
// }

// @mixin gradient-directional($start-color: #555, $end-color: #333, $deg: 45deg) {
//   background-image: linear-gradient($deg, $start-color, $end-color);
//   background-repeat: repeat-x;
// }
// @mixin gradient-x-three-colors($start-color: #00b3ee, $mid-color: #7a43b6, $color-stop: 50%, $end-color: #c3325f) {
//   background-image: linear-gradient(to right, $start-color, $mid-color $color-stop, $end-color);
//   background-repeat: no-repeat;
// }
// @mixin gradient-y-three-colors($start-color: #00b3ee, $mid-color: #7a43b6, $color-stop: 50%, $end-color: #c3325f) {
//   background-image: linear-gradient($start-color, $mid-color $color-stop, $end-color);
//   background-repeat: no-repeat;
// }
// @mixin gradient-radial($inner-color: #555, $outer-color: #333) {
//   background-image: radial-gradient(circle, $inner-color, $outer-color);
//   background-repeat: no-repeat;
// }

function gradientStriped() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'rgba(255,255,255, .15)';
  var angle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '45deg';

  return css(_templateObject$4, angle, color, color, color);
}

export { defaultTheme as theme, colorYiq, getColor, themeColor, themeColorLevel, sassRgba, boxShadow, transition, borderRadius$1 as borderRadius, borderTopRadius, borderRightRadius, borderBottomRadius, borderLeftRadius, gradientStriped, hover, hoverFocus, plainHoverFocus, hoverFocusActive };
