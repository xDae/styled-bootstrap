import React from 'react';
import styled, { css } from 'styled-components';
import { darken } from'polished';

import Heading from '../Headings/Headings';

import { borderRadius } from '../../utils/border-radius';
import { hoverFocus } from '../../utils/hover';
import { sassRgba } from '../../utils/sassRgba';
import { navDivider } from '../../utils/nav-divider';

import * as defaults from '../../defaultTheme';

const Dropdown = styled.div`
  position: relative;

  // TODO: style inner styled Component, not the div
  ${props => props.isOpen && css`
    > div {
      display: block!important;
    }
  `}
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
  font-size: ${defaults.fontSizeBase};
  color: ${props => props.theme.bodyColor};
  text-align: left;
  list-style: none;
  background-color: ${props => props.theme.dropdownBg};
  background-clip: padding-box;
  ${props => `border: ${props.theme.dropdownBorderWidth} solid ${props.theme.dropdownBorderColor};`}
  ${borderRadius(defaults.borderRadius)}
  // @include box-shadow($dropdown-box-shadow);
`;

Dropdown.Item = styled.a`
  display: block;
  width: 100%;
  ${props => `padding: ${props.theme.dropdownItemPaddingY} ${props.theme.dropdownItemPaddingX};`}
  clear: both;
  font-weight: ${defaults.fontWeightNormal};
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

  ${props => props.active && css`
    color: ${props.theme.dropdownLinkActiveColor};
    text-decoration: none;
    background-color: ${props.theme.dropdownLinkActiveBg};
  `}

  ${props => props.disabled && css`
      color: ${props.theme.dropdownLinkDisabledColor}!important;
      background-color: transparent!important;

    ${defaults.enableGradients && `
      background-image: none;
    `}
  `}
`;

Dropdown.Divider = styled.div`
  ${navDivider(props => props.theme.dropdownDividerBg)}
`;

Dropdown.Header = styled(Heading)`
  display: block;
  ${({ theme }) => `padding: ${theme.dropdownPaddingY} ${theme.dropdownItemPaddingX};`}
  margin-bottom: 0;
  font-size: ${defaults.fontSizeSm};
  color: ${({ theme }) => theme.dropdownHeaderColor};
  white-space: nowrap;
`;

const theme = {
  dropdownMinWidth: '10rem',
  dropdownPaddingY: '.5rem',
  dropdownMarginTop: '.125rem',
  dropdownBg: defaults.white,
  dropdownBorderColor: `${sassRgba(defaults.black, 0.15)}`,
  dropdownBorderWidth: defaults.borderWidth,
  dropdownDividerBg: defaults.grayLighter,
  dropdownBoxShadow: `0 .5rem 1rem ${sassRgba(defaults.black, .175)}`,

  dropdownLinkColor: defaults.grayDark,
  dropdownLinkHoverColor: darken(0.05, defaults.grayDark),
  dropdownLinkHoverBg: defaults.grayLightest,

  dropdownLinkActiveColor: defaults.componentActiveColor,
  dropdownLinkActiveBg: defaults.componentActiveBg,

  dropdownLinkDisabledColor: defaults.grayLight,

  dropdownItemPaddingY: '.25rem',
  dropdownItemPaddingX: '1.5rem',

  dropdownHeaderColor: defaults.grayLight,
};

Dropdown.defaultProps = { theme };
Dropdown.Menu.defaultProps = { theme };
Dropdown.Item.defaultProps = { theme };
Dropdown.Divider.defaultProps = { theme };
Dropdown.Header.defaultProps = { theme };

export default Dropdown;
