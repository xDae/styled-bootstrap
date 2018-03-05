// @flow

// $FlowIssue
import parseToRgb from 'polished/lib/color/parseToRgb';
// $FlowIssue
import rgba from 'polished/lib/color/rgba';

export function sassRgba(color: string, alpha: number) {
  return rgba(Object.assign(parseToRgb(color), { alpha }));
}

export default sassRgba;
