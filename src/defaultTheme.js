import { darken } from 'polished';

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
// Font, line-height, and color for body text, headings, and more.

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

export const headingsMarginBottom = `${spacer/2}rem`;
export const headingsFontFamily = 'inherit';
export const headingsFontWeight = 500;
export const headingsLineHeight = 1.1;
export const headingsColor = 'inherit';


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
export const badgeDangerBg =  brandDanger;

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

