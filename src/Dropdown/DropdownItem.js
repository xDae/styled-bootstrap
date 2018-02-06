import styled, { css } from 'styled-components';

import { hoverFocus } from '../utils/src/hover';

const DropdownItem = styled.a`
  display: block;
  width: 100%;
  ${({ theme }) =>
    `padding: ${theme.dropdownItemPaddingY} ${theme.dropdownItemPaddingX};`};
  clear: both;
  font-weight: ${props => props.theme.fontWeightNormal};
  color: ${props => props.theme.dropdownLinkColor};
  text-align: inherit;
  white-space: nowrap;
  background: none;
  border: 0;

  ${hoverFocus(css`
    color: ${props => props.theme.dropdownLinkHoverColor};
    text-decoration: none;
    background-color: ${props => props.theme.dropdownLinkHoverBg};
  `)};

  ${props =>
    props.active &&
    css`
      color: ${props.theme.dropdownLinkActiveColor}!important;
      text-decoration: none;
      background-color: ${props.theme.dropdownLinkActiveBg}!important;
    `};

  ${props =>
    props.disabled &&
    css`
      color: ${props.theme.dropdownLinkDisabledColor}!important;
      background-color: transparent !important;

      ${props.theme.enableGradients && 'background-image: none;'};
    `};
`;

DropdownItem.defaultProps = {};

export default DropdownItem;
