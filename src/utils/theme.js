// @flow

// $FlowIssue
import get from 'lodash.get';

/**
 * Returns the value of `props[path]` or `defaultValue`
 * @example
 * const Button = styled.button`
 *  color: ${prop('color', 'red')};
 * `
 */
const themeProp = (path: string | string[], defaultValue?: any): any => (
  props: Object = {}
) => get(props.theme, path, defaultValue);

export default themeProp;
