import styled from 'styled-components';

import { borderRadius } from '../utils/src/border-radius';
import { boxShadow } from '../utils/src/box-shadow';

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: ${props => props.theme.zIndexDropdown};
  display: none;
  float: left;
  min-width: ${props => props.theme.dropdownMinWidth};
  padding: ${props => props.theme.dropdownPaddingY} 0;
  margin: ${props => props.theme.dropdownMarginTop} 0 0;
  font-size: ${props => props.theme.fontSizeBase};
  color: ${props => props.theme.bodyColor};
  text-align: left;
  list-style: none;
  background-color: ${props => props.theme.dropdownBg};
  background-clip: padding-box;
  ${({ theme }) =>
    `border: ${theme.dropdownBorderWidth} solid ${theme.dropdownBorderColor};`};
  ${borderRadius(props => props.theme.borderRadius)};
  ${boxShadow(props => props.theme.dropdownBoxShadow)};
`;

DropdownMenu.defaultProps = {};

export default DropdownMenu;
