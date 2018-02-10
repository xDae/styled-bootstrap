import styled from 'styled-components';

import themeProp from '../utils/src/theme';

import { borderRadius } from '../utils/src/border-radius';
import { boxShadow } from '../utils/src/box-shadow';

import {
  dropdownMinWidth,
  dropdownPaddingY,
  dropdownMarginTop,
  fontSizeBase,
  bodyColor,
  dropdownBg,
  dropdownBorderWidth,
  dropdownBorderColor,
  dropdownBorderRadius,
  dropdownBoxShadow,
  zIndexDropdown
} from './default-theme';

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: ${themeProp('zIndexDropdown', zIndexDropdown)};
  display: none;
  float: left;
  min-width: ${themeProp('dropdownMinWidth', dropdownMinWidth)};
  padding: ${themeProp('dropdownPaddingY', dropdownPaddingY)} 0;
  margin: ${themeProp('dropdownMarginTop', dropdownMarginTop)} 0 0;
  font-size: ${themeProp('fontSizeBase', fontSizeBase)};
  color: ${themeProp('bodyColor', bodyColor)};
  text-align: left;
  list-style: none;
  background-color: ${themeProp('dropdownBg', dropdownBg)};
  background-clip: padding-box;
  border: ${themeProp('dropdownBorderWidth', dropdownBorderWidth)} solid
    ${themeProp('dropdownBorderColor', dropdownBorderColor)};
  ${borderRadius(themeProp('dropdownBorderRadius', dropdownBorderRadius))};
  ${boxShadow(themeProp('dropdownBoxShadow', dropdownBoxShadow))};
`;

DropdownMenu.defaultProps = {};

export default DropdownMenu;
