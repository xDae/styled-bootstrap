import styled from 'styled-components';

import Heading from '../Heading';

const DropdownHeader = styled(Heading)`
  display: block;
  ${({ theme }) =>
    `padding: ${theme.dropdownPaddingY} ${theme.dropdownItemPaddingX};`};
  margin-bottom: 0;
  font-size: ${props => props.theme.fontSizeSm};
  color: ${({ theme }) => theme.dropdownHeaderColor};
  white-space: nowrap;
`;

DropdownHeader.defaultProps = {};

export default DropdownHeader;
