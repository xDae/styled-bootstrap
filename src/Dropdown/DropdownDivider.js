import styled from 'styled-components';

import { navDivider } from '../utils/src/nav-divider';

const DropdownDivider = styled.div`
  ${props => navDivider(props.theme.dropdownDividerBg)};
`;

DropdownDivider.defaultProps = {};

export default DropdownDivider;
