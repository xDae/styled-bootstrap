// @flow

// $FlowIssue
import stripUnit from 'polished/lib/helpers/stripUnit';

import { sassRgba } from '../sassRgba';
import { gray600, black } from './colors';
import { spacer } from './spacing';
import { borderWidth } from './components';

// Fonts
//
// Font, lineHeight, and color for body text, headings, and more.

export const fontFamilySansSerif =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sansSerif';
export const fontFamilyMonospace =
  'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
export const fontFamilyBase = fontFamilySansSerif;

export const fontSizeBase = '1rem'; // Assumes the browse, typically `16px`
export const fontSizeLg = '1.25rem';
export const fontSizeSm = '.875rem';

export const fontWeightNormal = 'normal';
export const fontWeightBold = 'bold';

export const fontWeightBase = fontWeightNormal;
export const lineHeightBase = 1.5;

export const h1FontSize = '2.5rem';
export const h2FontSize = '2rem';
export const h3FontSize = '1.75rem';
export const h4FontSize = '1.5rem';
export const h5FontSize = '1.25rem';
export const h6FontSize = '1rem';

export const headingsMarginBottom = `${spacer / 2}rem`;
export const headingsFontFamily = 'inherit';
export const headingsFontWeight = 500;
export const headingsLineHeight = 1.1;
export const headingsColor = 'inherit';

export const display1Size = '6rem';
export const display2Size = '5.5rem';
export const display3Size = '4.5rem';
export const display4Size = '3.5rem';

export const display1Weight: number = 300;
export const display2Weight: number = 300;
export const display3Weight: number = 300;
export const display4Weight: number = 300;
export const displayLineHeight = headingsLineHeight;

export const leadFontSize = '1.25rem';
export const leadFontWeight: number = 300;

export const smallFontSize = '80%';

export const textMuted = gray600;

export const blockquoteSmallColor = gray600;
export const blockquoteFontSize = `${stripUnit(fontSizeBase) * 1.25}rem`;

export const hrBorderColor = sassRgba(black, 0.1);
export const hrBorderWidth = borderWidth;

export const markPadding = '.2em';

export const dtFontWeight = fontWeightBold;

export const kbdBoxShadow = `inset 0 -.1rem 0 ${sassRgba(black, 0.25)}`;
export const nestedKbdFontWeight = fontWeightBold;

export const listInlinePadding = '5px';

export const markBg = '#fcf8e3';
