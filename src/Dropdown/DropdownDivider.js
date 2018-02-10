import styled from 'styled-components';
import themeProp from '../utils/src/theme';

import { navDivider } from '../utils/src/nav-divider';

import { dropdownDividerBg } from './default-theme';

const DropdownDivider = styled.div`
  ${navDivider(themeProp('dropdownDividerBg', dropdownDividerBg))};
`;

DropdownDivider.defaultProps = {};

export default DropdownDivider;
