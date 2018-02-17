// @flow

// $FlowIssue
import mix from 'polished/lib/color/mix';
// $FlowIssue
import parseToRgb from 'polished/lib/color/parseToRgb';

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

// Request a theme color level
export function themeColorLevel(color: string, level: number = 0) {
  const colorBase = level > 0 ? '#000' : '#fff';

  if (level < 0) {
    // Lighter values need a quick double negative for the Sass math to work
    return mix(level * -1 * themeColorInterval, colorBase, color);
  }

  return mix(level * themeColorInterval, colorBase, color);
}
