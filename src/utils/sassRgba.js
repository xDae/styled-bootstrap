// @flow

import { parseToRgb, rgba } from 'polished';

export function sassRgba(color: string, alpha: number) {
  return rgba(Object.assign(parseToRgb(color), { alpha }));
}

export default sassRgba;
