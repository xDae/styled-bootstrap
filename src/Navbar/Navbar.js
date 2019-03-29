// @flow

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { hoverFocus } from '../utils/hover';

import {
	navbarPaddingY,
	navbarPaddingX,
	navbarBrandPaddingY,
	navbarBrandFontSize,
	navbarLightColor,
	navbarLightDisabledColor,
	navbarLightHoverColor,
	navbarLightActiveColor,
	navbarDarkActiveColor,
	navbarDarkColor,
	navbarDarkHoverColor
} from '../utils/defaultTheme';

const Navbar = styled.nav`
	position: relative;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	${props =>
		`padding: ${props.theme.navbarPaddingY} ${props.theme.navbarPaddingX};`};

	> .container,
	> .container-fluid {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;

		@include media-breakpoint-down(nth(map-keys($grid-breakpoints), 1)) {
			width: 100%;
			margin-right: 0;
			margin-left: 0;
		}
	}
`;

Navbar.defaultProps = {
	theme: {
		navbarPaddingY,
		navbarPaddingX
	}
};

Navbar.propTypes = {
	theme: PropTypes.object
};

Navbar.Brand = styled.a`
	display: inline-block;
	padding-top: ${props => props.theme.navbarBrandPaddingY};
	padding-bottom: ${props => props.theme.navbarBrandPaddingY};
	margin-right: ${props => props.theme.navbarPaddingX};
	font-size: ${props => props.theme.navbarBrandFontSize};
	line-height: inherit;
	white-space: nowrap;
	flex-grow: 2;

	${hoverFocus(css`
		text-decoration: none;
	`)};

	${props => {
		const colors = {
			light: props.theme.navbarLightActiveColor,
			dark: props.theme.navbarDarkActiveColor
		};

		return css`
			color: ${colors[props.color]};

			${hoverFocus(css`
				color: ${colors[props.color]};
			`)};
		`;
	}};
`;

Navbar.Brand.defaultProps = {
	theme: {
		navbarBrandPaddingY,
		navbarPaddingX,
		navbarBrandFontSize,
		navbarLightActiveColor,
		navbarDarkActiveColor
	},
	color: 'light'
};

Navbar.Nav = styled.ul`
	display: flex;
	padding-left: 0;
	margin-bottom: 0;
	list-style: none;

	// .dropdown-menu {
	//   position: static;
	//   float: none;
	// }
`;

Navbar.NavItem = styled.li``;

Navbar.NavLink = styled.a`
  padding-right: .5rem;
  padding-left: .5rem;
  // color: ${props => props.theme.navbarLightColor};

  ${props => {
		const colors = {
			light: {
				color: props.theme.navbarLightActiveColor,
				hover: props.theme.navbarLightHoverColor
			},
			dark: {
				color: props.theme.navbarDarkColor,
				hover: props.theme.navbarDarkHoverColor
			}
		};

		return css`
			color: ${colors[props.color].color};

			${hoverFocus(css`
				color: ${colors[props.color].hover};
				text-decoration: none;
			`)};
		`;
	}};

  &.disabled {
    color: ${props => props.theme.navbarLightDisabledColor};
  }
`;

Navbar.NavLink.defaultProps = {
	theme: {
		navbarLightColor,
		navbarLightDisabledColor,
		navbarLightHoverColor,
		navbarLightActiveColor,
		navbarDarkColor,
		navbarDarkHoverColor
	},
	color: 'light'
};

export default Navbar;
