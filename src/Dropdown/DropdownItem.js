import styled, { css } from 'styled-components';

import { hoverFocus } from '../utils/hover';
import themeProp from '../utils/theme';

import {
  dropdownItemPaddingY,
  dropdownItemPaddingX,
  fontWeightNormal,
  dropdownLinkColor,
  dropdownLinkHoverColor,
  dropdownLinkHoverBg,
  dropdownLinkActiveColor,
  dropdownLinkActiveBg,
  dropdownLinkDisabledColor,
  enableGradients
} from './default-theme';

const DropdownItem = styled.a`
  display: block;
  width: 100%;
  padding: ${themeProp('dropdownItemPaddingY', dropdownItemPaddingY)}
    ${themeProp('dropdownItemPaddingX', dropdownItemPaddingX)};
  clear: both;
  font-weight: ${themeProp('fontWeightNormal', fontWeightNormal)};
  color: ${themeProp('dropdownLinkColor', dropdownLinkColor)};
  text-align: inherit;
  white-space: nowrap;
  background: none;
  border: 0;

  ${hoverFocus(css`
    color: ${themeProp('dropdownLinkHoverColor', dropdownLinkHoverColor)};
    text-decoration: none;
    background-color: ${themeProp('dropdownLinkHoverBg', dropdownLinkHoverBg)};
  `)};

  ${props =>
    props.active &&
    css`
      color: ${themeProp(
        'dropdownLinkActiveColor',
        dropdownLinkActiveColor
      )}!important;
      text-decoration: none;
      background-color: ${themeProp(
        'dropdownLinkActiveBg',
        dropdownLinkActiveBg
      )}!important;
    `};

  ${props =>
    props.disabled &&
    css`
      color: ${themeProp(
        'dropdownLinkDisabledColor',
        dropdownLinkDisabledColor
      )}!important;
      background-color: transparent !important;

      ${themeProp('enableGradients', enableGradients) &&
        'background-image: none;'};
    `};
`;

DropdownItem.defaultProps = {};

export default DropdownItem;
