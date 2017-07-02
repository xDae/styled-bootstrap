import styled, { css } from 'styled-components';
// import { darken } from 'polished';

import Heading from '../Headings/Headings';

import { borderRadius } from '../../utils/border-radius';
import { hoverFocus } from '../../utils/hover';
import { boxShadow } from '../../utils/box-shadow';
// import { sassRgba } from '../../utils/sassRgba';
import { navDivider } from '../../utils/nav-divider';

// import * as defaults from '../../defaultTheme';

import {
  dropdownMinWidth,
  dropdownPaddingY,
  dropdownMarginTop,
  dropdownBg,
  dropdownBorderColor,
  dropdownBorderWidth,
  dropdownDividerBg,
  dropdownBoxShadow,
  dropdownLinkColor,
  dropdownLinkHoverColor,
  dropdownLinkHoverBg,
  dropdownLinkActiveColor,
  dropdownLinkActiveBg,
  dropdownLinkDisabledColor,
  dropdownItemPaddingY,
  dropdownItemPaddingX,
  dropdownHeaderColor,
  zindexDropdown,
  fontSizeSm
} from '../../defaultTheme';

const Dropdown = styled.div`
  position: relative;

  ${props =>
    props.isOpen &&
    css`
    ${Dropdown.Menu} {
      display: block;
    }
  `};
`;

Dropdown.Menu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: ${props => props.theme.zindexDropdown};
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

Dropdown.Item = styled.a`
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
    color: ${props.theme.dropdownLinkActiveColor};
    text-decoration: none;
    background-color: ${props.theme.dropdownLinkActiveBg};
  `};

  ${props =>
    props.disabled &&
    css`
      color: ${props.theme.dropdownLinkDisabledColor}!important;
      background-color: transparent!important;

    ${props.theme.enableGradients &&
      `
      background-image: none;
    `}
  `};
`;

Dropdown.Divider = styled.div`
  ${props => navDivider(props.theme.dropdownDividerBg)};
`;

Dropdown.Header = styled(Heading)`
  display: block;
  ${({ theme }) =>
    `padding: ${theme.dropdownPaddingY} ${theme.dropdownItemPaddingX};`}
  margin-bottom: 0;
  font-size: ${props => props.theme.fontSizeSm};
  color: ${({ theme }) => theme.dropdownHeaderColor};
  white-space: nowrap;
`;

const theme = {
  dropdownMinWidth,
  dropdownPaddingY,
  dropdownMarginTop,
  dropdownBg,
  dropdownBorderColor,
  dropdownBorderWidth,
  dropdownDividerBg,
  dropdownBoxShadow,
  dropdownLinkColor,
  dropdownLinkHoverColor,
  dropdownLinkHoverBg,
  dropdownLinkActiveColor,
  dropdownLinkActiveBg,
  dropdownLinkDisabledColor,
  dropdownItemPaddingY,
  dropdownItemPaddingX,
  dropdownHeaderColor,
  zindexDropdown,
  fontSizeSm
};

Dropdown.defaultProps = { theme };
Dropdown.Menu.defaultProps = { theme };
Dropdown.Item.defaultProps = { theme };
Dropdown.Divider.defaultProps = { theme };
Dropdown.Header.defaultProps = { theme };

export default Dropdown;
