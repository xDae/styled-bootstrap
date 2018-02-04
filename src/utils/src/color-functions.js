// @flow

import { mix, parseToRgb } from 'polished';
import { colors, themeColors } from './defaultTheme';

const themeColorInterval = 0.08;

// Color contrast
export function colorYiq(color: string): string {
  const r = parseToRgb(color).red;
  const g = parseToRgb(color).green;
  const b = parseToRgb(color).blue;

  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  if (yiq >= 150) {
    return '#111';
  }

  return '#fff';
}

// Retreive color
export function getColor(key: string = 'blue'): string {
  return colors[key];
}

export function themeColor(key: string = 'primary'): string {
  return themeColors[key];
}

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
