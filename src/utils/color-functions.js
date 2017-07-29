// @flow

import { mix } from 'polished';
import { colors, themeColors } from '../defaultTheme';

const themeColorInterval = 0.08;

// Retreive color Sass maps
export function getColor(key: string = 'blue') {
  return colors[key];
}

export function themeColor(key: string = 'primary') {
  return themeColors[key];
}

// export function grayscale(key: string = '100') {
//   return grays[key];
// }

// Request a theme color level
export function themeColorLevel(
  colorName: string = 'primary',
  level: number = 0
) {
  const color = themeColor(colorName);
  const colorBase = level > 0 ? '#000' : '#fff';

  if (level < 0) {
    // Lighter values need a quick double negative for the Sass math to work
    return mix(level * -1 * themeColorInterval, colorBase, color);
  }

  return mix(level * themeColorInterval, colorBase, color);
}
