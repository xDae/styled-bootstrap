import styled from 'styled-components';

import themeProp from '../utils/theme';

import {
  dropdownPaddingY,
  dropdownItemPaddingX,
  fontSizeSm,
  dropdownHeaderColor
} from './default-theme';

import Heading from '../Heading';

const DropdownHeader = styled(Heading)`
  display: block;
  padding: ${themeProp('dropdownPaddingY', dropdownPaddingY)}
    ${themeProp('dropdownItemPaddingX', dropdownItemPaddingX)};
  margin-bottom: 0;
  font-size: ${themeProp('fontSizeSm', fontSizeSm)};
  color: ${themeProp('dropdownHeaderColor', dropdownHeaderColor)};
  white-space: nowrap;
`;

DropdownHeader.defaultProps = {};

export default DropdownHeader;
