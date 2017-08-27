// @flow

// Spacing
//
// Control the default styling of most Bootstrap elements by modifying these
// variables. Mostly focused on spacing.
// You can add more entries to the $spacers map, should you need more variation.

export const spacer: number = 1;
export const spacers = {
  s0: 0,
  s1: `${spacer * 0.25}rem`,
  s2: `${spacer * 0.5}rem`,
  s3: spacer,
  s4: `${spacer * 1.5}rem`,
  s5: `${spacer * 3}rem`
};
