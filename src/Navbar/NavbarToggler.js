// @flow

import React from 'react';

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { borderRadius } from '../utils/border-radius';

import {
  navbarTogglerPaddingY,
  navbarTogglerPaddingX,
  navbarTogglerFontSize,
  navbarTogglerBorderRadius,
  navbarLightTogglerIconBg,
  navbarDarkTogglerIconBg,
  navbarLightColor,
  navbarDarkColor,
  navbarLightTogglerBorderColor,
  navbarDarkTogglerBorderColor,
  borderWidth
} from '../utils/defaultTheme';

export const StyledNavbarToggler = styled.button`
  ${props =>
    `padding: ${props.theme.navbarTogglerPaddingY} ${props.theme
      .navbarTogglerPaddingX};`};
  font-size: ${props => props.theme.navbarTogglerFontSize};
  line-height: 1;
  background: transparent; // remove default button style
  border: ${props => props.theme.borderWidth} solid transparent; // remove default button style
  ${props => borderRadius(props.theme.navbarTogglerBorderRadius)};

  ${props => {
    const colors = {
      light: {
        color: props.theme.navbarLightColor,
        borderColor: props.theme.navbarLightTogglerBorderColor
      },
      dark: {
        color: props.theme.navbarDarkColor,
        borderColor: props.theme.navbarDarkTogglerBorderColor
      }
    };

    return css`
      color: ${colors[props.color].color};
      border-color: ${colors[props.color].borderColor};
  `;
  }};

  // @include hover-focus {
  //   text-decoration: none;
  // }
`;

StyledNavbarToggler.defaultProps = {
  theme: {
    navbarTogglerPaddingY,
    navbarTogglerPaddingX,
    navbarTogglerFontSize,
    navbarTogglerBorderRadius,
    navbarLightColor,
    navbarDarkColor,
    navbarLightTogglerBorderColor,
    navbarDarkTogglerBorderColor,
    borderWidth
  },
  color: 'light'
};

export const NavbarTogglerIcon = styled.span`
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  content: "";
  background: no-repeat center center;
  background-size: 100% 100%;

  ${props => {
    const colors = {
      light: {
        backgroundImage: props.theme.navbarLightTogglerIconBg
      },
      dark: {
        backgroundImage: props.theme.navbarDarkTogglerIconBg
      }
    };

    return css`background-image: ${colors[props.color].backgroundImage};`;
  }};
`;

NavbarTogglerIcon.defaultProps = {
  theme: {
    navbarLightTogglerIconBg,
    navbarDarkTogglerIconBg
  },
  color: 'light'
};

const NavbarToggler = props =>
  <StyledNavbarToggler {...props} icon={props.icon}>
    {props.icon ? props.icon : <NavbarTogglerIcon color={props.color} />}
  </StyledNavbarToggler>;

export default NavbarToggler;
