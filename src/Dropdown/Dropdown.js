import styled, { css } from 'styled-components';

import DropdownHeader from './DropdownHeader';
import DropdownItem from './DropdownItem';
import DropdownMenu from './DropdownMenu';
import DropdownDivider from './DropdownDivider';

const Dropdown = styled.div`
  position: relative;

  ${props =>
    props.isOpen &&
    css`
      ${DropdownMenu} {
        display: block;
      }
    `};
`;

Dropdown.Header = DropdownHeader;
Dropdown.Item = DropdownItem;
Dropdown.Menu = DropdownMenu;
Dropdown.Divider = DropdownDivider;

Dropdown.defaultProps = {};

export default Dropdown;
