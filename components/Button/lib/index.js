'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var polished = require('polished');

//      

function sassRgba(color, alpha) {
  return polished.rgba(Object.assign(polished.parseToRgb(color), { alpha: alpha }));
}

//      

// General variable structure

// Colors
//
// Grayscale and brand colors for use across Bootstrap.

// Start with assigning color names to specific hex values.

var white = '#fff';
var gray100 = '#f8f9fa';




var gray600 = '#868e96';

var gray800 = '#343a40';
var gray900 = '#212529';
var black = '#000';

var blue = '#007bff';



var red = '#dc3545';

var yellow = '#ffc107';
var green = '#28a745';

var cyan = '#17a2b8';



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

var enableTransitions = true;
var enableHoverMediaQuery = false;



// Spacing
//
// Control the default styling of most Bootstrap elements by modifying these
// variables. Mostly focused on spacing.
// You can add more entries to the $spacers map, should you need more variation.




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




// Links
//
// Style anchor elements.

var linkColor = themeColors.primary;

var linkHoverColor = polished.darken(0.15, linkColor);


// Components
//
// Define common padding and border radius sizes and more.




var borderRadius = '0.25rem';
var borderRadiusLg = '0.3rem';
var borderRadiusSm = '0.2rem';






var transitionBase = 'all .2s ease-in-out';



// Fonts
//
// Font, lineHeight, and color for body text, headings, and more.






var fontSizeBase = '1rem';
var fontSizeLg = '1.25rem';
var fontSizeSm = '0.875rem';


var fontWeightNormal = 'normal';



var lineHeightBase = 1.5;











var btnBoxShadow = 'inset 0 1px 0 rgba(' + white + ',.15), 0 1px 1px ' + sassRgba(black, 0.075);











// Navs

var navLinkPaddingY = '.5rem';















// Navbar




var navbarBrandFontSize = fontSizeLg;
// Compute the navbarBrand paddingY so the navbarBrand will have the same height as navbar-text and navLink
var navLinkHeight = polished.stripUnit(navbarBrandFontSize) * lineHeightBase + 'rem';

var navbarBrandHeight = polished.stripUnit(fontSizeBase) * lineHeightBase + navLinkPaddingY * 2 + 'rem';

var navbarBrandPaddingY = (polished.stripUnit(navbarBrandHeight) - navLinkHeight) / 2 + 'rem';






var navbarDarkColor = sassRgba(white, 0.5);
var navbarDarkHoverColor = sassRgba(white, 0.75);
var navbarDarkActiveColor = sassRgba(white, 1);
var navbarDarkDisabledColor = sassRgba(white, 0.25);

var navbarDarkTogglerBorderColor = sassRgba(white, 0.1);

var navbarLightColor = sassRgba(black, 0.5);
var navbarLightHoverColor = sassRgba(black, 0.7);
var navbarLightActiveColor = sassRgba(black, 0.9);
var navbarLightDisabledColor = sassRgba(black, 0.3);

var navbarLightTogglerBorderColor = sassRgba(black, 0.1);

// Pagination


























// Form states and alerts
//
// Define colors for form feedback states and, by default, alerts.


var stateSuccessBg = '#dff0d8';
var stateSuccessBorderColor = polished.darken(0.05, stateSuccessBg);


var stateInfoBg = '#d9edf7';
var stateInfoBorderColor = polished.darken(0.07, stateInfoBg);


var stateWarningBg = '#fcf8e3';

var stateWarningBorderColor = polished.darken(0.05, stateWarningBg);


var stateDangerBg = '#f2dede';
var stateDangerBorderColor = polished.darken(0.05, stateDangerBg);

// Badges
















// Use a higher than normal value to ensure completely rounded edges when
// customizing padding or fontSize on labels.


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





var inputBorderColor = sassRgba(black, 0.15);
var inputBtnBorderWidth = borderWidth; // For form controls ans
var inputBoxShadow = 'inset 0 1px 1px ' + sassRgba(black, 0.075);





var inputBorderColorFocus = polished.lighten(0.25, themeColors.primary);
var inputBoxShadowFocus = inputBoxShadow + ', ' + sassRgba(inputBorderColorFocus, 0.6);



var inputHeight = polished.stripUnit(fontSizeBase) * inputBtnLineHeight + polished.stripUnit(inputBtnPaddingY) * 2 + 'rem';

var inputHeightLg = polished.stripUnit(fontSizeLg) * inputBtnLineHeightLg + polished.stripUnit(inputBtnPaddingYlg) * 2 + 'rem';

var inputHeightSm = polished.stripUnit(fontSizeSm) * inputBtnLineHeightSm + polished.stripUnit(inputBtnPaddingYsm) * 2 + 'rem';



// Dropdowns
//
// Dropdown menu container and contents.





var dropdownBorderColor = sassRgba(black, 0.15);


var dropdownBoxShadow = '0 .5rem 1rem ' + sassRgba(black, 0.175);


var dropdownLinkHoverColor = polished.darken(0.05, gray900);












// Alerts
//
// Define alert colors, border radius, and padding.
























// Progress bars





var progressBoxShadow = 'inset 0 .1rem .1rem ' + sassRgba(black, 0.1);





// List group


var listGroupBorderColor = sassRgba(black, 0.125);




















// Grid columns
//
// Set the number of columns and specify the width of the gutters.


var gridGutterWidthBase = '30px';


// Breadcrumbs









// Jumbotron




// Cards



var cardBorderWidth = '1px';
var cardBorderRadius = borderRadius;
var cardBorderColor = sassRgba(black, 0.125);
var cardInnerBorderRadius = 'calc(' + polished.stripUnit(cardBorderRadius) + 'px - ' + polished.stripUnit(cardBorderWidth) + ')}px)';
var cardCapBg = sassRgba(black, 0.03);






var cardDeckMargin = polished.stripUnit(gridGutterWidthBase) / 2 + 'px';

//      

// Color contrast
function colorYiq(color) {
  var r = polished.parseToRgb(color).red;
  var g = polished.parseToRgb(color).green;
  var b = polished.parseToRgb(color).blue;

  var yiq = (r * 299 + g * 587 + b * 114) / 1000;

  if (yiq >= 150) {
    return '#111';
  }

  return '#fff';
}

// Retreive color




// Request a theme color level

var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var _templateObject$2 = taggedTemplateLiteral(['\n      border-radius: ', ';\n    '], ['\n      border-radius: ', ';\n    ']);
var _templateObject2$2 = taggedTemplateLiteral(['\n      border-top-right-radius: ', ';\n      border-top-left-radius: ', ';\n    '], ['\n      border-top-right-radius: ', ';\n      border-top-left-radius: ', ';\n    ']);
var _templateObject3$2 = taggedTemplateLiteral(['\n      border-bottom-right-radius: ', ';\n      border-top-right-radius: ', ';\n    '], ['\n      border-bottom-right-radius: ', ';\n      border-top-right-radius: ', ';\n    ']);
var _templateObject4$2 = taggedTemplateLiteral(['\n      border-bottom-right-radius: ', ';\n      border-bottom-left-radius: ', ';\n    '], ['\n      border-bottom-right-radius: ', ';\n      border-bottom-left-radius: ', ';\n    ']);
var _templateObject5$1 = taggedTemplateLiteral(['\n      border-bottom-left-radius: ', ';\n      border-top-left-radius: ', ';\n    '], ['\n      border-bottom-left-radius: ', ';\n      border-top-left-radius: ', ';\n    ']);

//      

function borderRadius$1() {
  var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0.25rem';

  if (enableRounded) {
    return styled.css(_templateObject$2, radius);
  }

  return '';
}

var _templateObject$3 = taggedTemplateLiteral(['\n      box-shadow: ', ';\n    '], ['\n      box-shadow: ', ';\n    ']);

function boxShadow(shadow) {
  if (enableShadows) {
    return styled.css(_templateObject$3, shadow);
  }

  return null;
}

var _templateObject$4 = taggedTemplateLiteral(['\n  &:hover { ', ' }\n'], ['\n  &:hover { ', ' }\n']);
var _templateObject2$3 = taggedTemplateLiteral(['\n      &:focus { ', '} }\n      ', '\n    '], ['\n      &:focus { ', '} }\n      ', '\n    ']);
var _templateObject3$3 = taggedTemplateLiteral(['\n    &:focus,\n    &:hover {\n      ', '\n    }\n  '], ['\n    &:focus,\n    &:hover {\n      ', '\n    }\n  ']);
var _templateObject4$3 = taggedTemplateLiteral(['\n      &,\n      &:focus {\n        ', '\n      }\n      ', '\n    '], ['\n      &,\n      &:focus {\n        ', '\n      }\n      ', '\n    ']);
var _templateObject5$2 = taggedTemplateLiteral(['\n    &,\n    &:focus,\n    &:hover {\n      ', '\n    }\n  '], ['\n    &,\n    &:focus,\n    &:hover {\n      ', '\n    }\n  ']);
var _templateObject6 = taggedTemplateLiteral(['\n      &:focus,\n      &:active {\n        ', '\n      }\n      ', '\n    '], ['\n      &:focus,\n      &:active {\n        ', '\n      }\n      ', '\n    ']);
var _templateObject7 = taggedTemplateLiteral(['\n    &:focus,\n    &:active,\n    &:hover {\n      ', '\n    }\n  '], ['\n    &:focus,\n    &:active,\n    &:hover {\n      ', '\n    }\n  ']);

//       

var hover = function hover(content) {
  return styled.css(_templateObject$4, content);
};

var hoverFocus = function hoverFocus(content) {
  if (enableHoverMediaQuery) {
    return styled.css(_templateObject2$3, content, hover(content));
  }

  return styled.css(_templateObject3$3, content);
};

var _templateObject$1 = taggedTemplateLiteral(['\n    color: ', ';\n    background-color: ', ';\n    border-color: ', ';\n    ', '\n\n    &:hover {\n      color: ', ';\n      background-color: ', ';\n      border-color: ', ';\n    }\n\n    &:focus,\n    &.focus {\n      // Avoid using mixin so we can pass custom focus shadow properly\n      ', '\n    }\n\n    // Disabled comes first so active can properly restyle\n    &.disabled,\n    &:disabled {\n      background-color: ', ';\n      border-color: ', ';\n    }\n\n    &:active,\n    &.active,\n    .show > &.dropdown-toggle {\n      background-color: ', ';\n      background-image: none;\n      border-color: ', ';\n      ', '\n    }\n  '], ['\n    color: ', ';\n    background-color: ', ';\n    border-color: ', ';\n    ', '\n\n    &:hover {\n      color: ', ';\n      background-color: ', ';\n      border-color: ', ';\n    }\n\n    &:focus,\n    &.focus {\n      // Avoid using mixin so we can pass custom focus shadow properly\n      ', '\n    }\n\n    // Disabled comes first so active can properly restyle\n    &.disabled,\n    &:disabled {\n      background-color: ', ';\n      border-color: ', ';\n    }\n\n    &:active,\n    &.active,\n    .show > &.dropdown-toggle {\n      background-color: ', ';\n      background-image: none;\n      border-color: ', ';\n      ', '\n    }\n  ']);
var _templateObject2$1 = taggedTemplateLiteral(['\n    color: ', ';\n    background-color: transparent;\n    background-image: none;\n    border-color: ', ';\n\n    ', ';\n\n    &:focus,\n    &.focus {\n      box-shadow: 0 0 0 3px ', ';\n    }\n\n    &.disabled,\n    &:disabled {\n      color: ', ';\n      background-color: transparent;\n    }\n\n    &:active,\n    &.active,\n    .show > &.dropdown-toggle {\n      color: ', ';\n      background-color: ', ';\n      border-color: ', ';\n    }\n  '], ['\n    color: ', ';\n    background-color: transparent;\n    background-image: none;\n    border-color: ', ';\n\n    ', ';\n\n    &:focus,\n    &.focus {\n      box-shadow: 0 0 0 3px ', ';\n    }\n\n    &.disabled,\n    &:disabled {\n      color: ', ';\n      background-color: transparent;\n    }\n\n    &:active,\n    &.active,\n    .show > &.dropdown-toggle {\n      color: ', ';\n      background-color: ', ';\n      border-color: ', ';\n    }\n  ']);
var _templateObject3$1 = taggedTemplateLiteral(['\n      color: ', ';\n      background-color: ', ';\n      border-color: ', ';\n    '], ['\n      color: ', ';\n      background-color: ', ';\n      border-color: ', ';\n    ']);
var _templateObject4$1 = taggedTemplateLiteral(['\n    padding: ', ' ', ';\n    font-size: ', ';\n    line-height: ', ';\n    ', '\n  '], ['\n    padding: ', ' ', ';\n    font-size: ', ';\n    line-height: ', ';\n    ', '\n  ']);

//      

// import { white, black } from '../defaultTheme';

function buttonVariant(background, border) {
  var activeBackground = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : polished.darken(0.075, background);
  var activeBorder = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : polished.darken(0.1, border);

  return styled.css(_templateObject$1, colorYiq(background), background, border, boxShadow(btnBoxShadow), colorYiq(background), activeBackground, activeBorder, enableShadows ? 'box-shadow: ' + btnBoxShadow + ', 0 0 0 3px ' + sassRgba(border, 0.5) + ';' : 'box-shadow: 0 0 0 3px ' + sassRgba(border, 0.5) + ';', background, border, activeBackground, activeBorder, boxShadow(btnActiveBoxShadow));
}

function buttonOutlineVariant(color) {
  var colorHover = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#fff';

  return styled.css(_templateObject2$1, color, color, hover(styled.css(_templateObject3$1, colorHover, color, color)), sassRgba(color, 0.5), color, colorHover, color, color);
}

function buttonSize(paddingY, paddingX, fontSize, lineHeight, radius) {
  return styled.css(_templateObject4$1, paddingY, paddingX, fontSize, lineHeight, borderRadius$1(radius));
}

var _templateObject$5 = taggedTemplateLiteral(['\n      transition: ', ';\n    '], ['\n      transition: ', ';\n    ']);
var _templateObject2$4 = taggedTemplateLiteral(['\n      transition: ', ';\n  '], ['\n      transition: ', ';\n  ']);

var transition = function transition(_transition) {
  if (enableTransitions) {
    return styled.css(_templateObject$5, transitionBase);
  }

  return styled.css(_templateObject2$4, _transition);
};

var _templateObject = taggedTemplateLiteral(['\n  display: inline-block;\n  font-weight: ', ';\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  user-select: none;\n  border: ', ' solid transparent;\n\n  ', ';\n\n  ', ';\n\n  // Share hover and focus styles\n  ', ';\n\n  &:focus,\n  &.focus {\n    outline: 0;\n    box-shadow: ', ';\n  }\n\n  &.disabled,\n  &:disabled {\n    opacity: .65;\n    ', ';\n  }\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n  ', ';\n'], ['\n  display: inline-block;\n  font-weight: ', ';\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  user-select: none;\n  border: ', ' solid transparent;\n\n  ', ';\n\n  ', ';\n\n  // Share hover and focus styles\n  ', ';\n\n  &:focus,\n  &.focus {\n    outline: 0;\n    box-shadow: ', ';\n  }\n\n  &.disabled,\n  &:disabled {\n    opacity: .65;\n    ', ';\n  }\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n  ', ';\n']);
var _templateObject2 = taggedTemplateLiteral(['\n    font-weight: ', ';\n    color: ', ';\n    border-radius: 0;\n\n    &,\n    &:active,\n    &.active,\n    &:disabled {\n      background-color: transparent;\n      ', '\n    }\n\n    &,\n    &:focus,\n    &:active {\n      border-color: transparent;\n    }\n\n    ', '\n\n    ', '\n\n    &:disabled {\n      color: ', ';\n\n      ', '\n    }\n  '], ['\n    font-weight: ', ';\n    color: ', ';\n    border-radius: 0;\n\n    &,\n    &:active,\n    &.active,\n    &:disabled {\n      background-color: transparent;\n      ', '\n    }\n\n    &,\n    &:focus,\n    &:active {\n      border-color: transparent;\n    }\n\n    ', '\n\n    ', '\n\n    &:disabled {\n      color: ', ';\n\n      ', '\n    }\n  ']);
var _templateObject3 = taggedTemplateLiteral(['\n      color: ', ';\n      text-decoration: ', ';\n      background-color: transparent;\n    '], ['\n      color: ', ';\n      text-decoration: ', ';\n      background-color: transparent;\n    ']);
var _templateObject4 = taggedTemplateLiteral(['\n    background-image: none;\n    ', '\n  '], ['\n    background-image: none;\n    ', '\n  ']);
var _templateObject5 = taggedTemplateLiteral(['\n    display: block;\n    width: 100%;\n  '], ['\n    display: block;\n    width: 100%;\n  ']);

//      

var Button$1 = styled__default.button(_templateObject, function (props) {
  return props.theme.btnFontWeight;
}, function (props) {
  return props.theme.inputBtnBorderWidth;
}, function (props) {
  return !props.size && buttonSize(props.theme.inputBtnPaddingY, props.theme.inputBtnPaddingX, props.theme.fontSizeBase, props.theme.inputBtnLineHeight, props.theme.btnBorderRadius);
}, function (props) {
  return transition(props.theme.btnTransition);
}, hoverFocus('text-decoration: none;'), function (props) {
  return props.theme.btnFocusBoxShadow;
}, boxShadow('none'), function (_ref) {
  var color = _ref.color;
  return themeColors[color] && buttonVariant(themeColors[color], themeColors[color]);
}, function (props) {
  return props.color === 'link' && styled.css(_templateObject2, props.theme.fontWeightNormal, props.theme.linkColor, boxShadow('none'), hover('border-color: transparent;'), hoverFocus(styled.css(_templateObject3, props.theme.linkHoverColor, props.theme.linkHoverDecoration)), btnLinkDisabledColor, hoverFocus('text-decoration: none;'));
}, function (_ref2) {
  var outline = _ref2.outline,
      color = _ref2.color;
  return outline && buttonOutlineVariant(themeColors[color]);
}, function (props) {
  return props.size === 'large' && buttonSize(props.theme.inputBtnPaddingYlg, props.theme.inputBtnPaddingXlg, props.theme.fontSizeLg, props.theme.inputBtnLineHeightLg, props.theme.btnBorderRadiusLg);
}, function (props) {
  return props.size === 'small' && buttonSize(props.theme.inputBtnPaddingYsm, props.theme.inputBtnPaddingXsm, props.theme.fontSizeSm, props.theme.inputBtnLineHeightSm, props.theme.btnBorderRadiusSm);
}, function (props) {
  return props.active && styled.css(_templateObject4, boxShadow(props.theme.btnFocusBoxShadow));
}, function (props) {
  return props.block && styled.css(_templateObject5);
});

Button$1.Link = Button$1.withComponent('a');

Button$1.defaultProps = {
  theme: {
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
    btnBoxShadow: btnBoxShadow,
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
    fontSizeBase: fontSizeBase,
    inputBtnBorderWidth: inputBtnBorderWidth,
    fontSizeLg: fontSizeLg,
    fontSizeSm: fontSizeSm,
    fontWeightNormal: fontWeightNormal,
    linkColor: linkColor
  }
};

module.exports = Button$1;
