import { parseToRgb, rgba } from 'polished';

export function sassRgba(color, alpha) {
  return rgba(Object.assign(parseToRgb(color), { alpha }));
}

export default sassRgba;
