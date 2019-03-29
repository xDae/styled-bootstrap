/* eslint-disable no-shadow */
/* eslint-disable no-else-return */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import omit from 'lodash.omit';
import {
	navLinkPaddingX,
	navLinkPaddingY,
	navLinkDisabledColor,
	navTabsBorderWidth,
	navTabsBorderColor,
	navTabsBorderRadius,
	white,
	navTabsLinkHoverBorderColor,
	navTabsLinkActiveColor,
	navTabsLinkActiveBg,
	navTabsLinkActiveBorderColor,
	navPillsBorderRadius,
	navPillsLinkActiveColor,
	navPillsLinkActiveBg
} from '../utils/defaultTheme';

const just = justify => {
	if (justify === 'center') {
		return justify;
	}
	if (justify === 'end') {
		return 'flex-end';
	}
	return 'flex-start';
};

const typeOf = ({
	type,
	theme: { navTabsBorderWidth, navTabsBorderRadius }
}) => {
	if (type === 'tabs') {
		return css`
			margin-bottom: -${navTabsBorderWidth};
			border: ${navTabsBorderWidth} solid transparent;
			border-top-right-radius: ${navTabsBorderRadius};
			border-top-left-radius: ${navTabsBorderRadius};

			&:hover,
			&:focus {
				border-color: ${navTabsLinkHoverBorderColor};
			}
		`;
	} else if (type === 'pills') {
		return css`
			border-radius: ${navPillsBorderRadius};
		`;
	} else {
		return null;
	}
};

const StyledNav = styled.nav`
	display: flex;
	flex-wrap: wrap;
	padding-left: 0;
	margin-bottom: 0;
	list-style: none;
	justify-content: ${({ justify }) => just(justify)};
	flex-direction: ${({ vertical }) => vertical && 'column'};
	border-bottom: ${({ type, theme: { navTabsBorderWidth } }) => type === 'tabs' && `${navTabsBorderWidth} solid ${navTabsBorderColor}`};

	> * {
		display: block;
		cursor: pointer;
		text-align: ${({ vertical }) => vertical && 'center'};

		&:focus,
		&:hover {
			text-decoration: none;
		}

		${props => typeOf(props)};
	}
`;

StyledNav.defaultProps = {
	theme: {
		navTabsBorderWidth,
		navTabsBorderColor,
		navTabsBorderRadius,
		white
	}
};

const StyledNavItem = styled.a`
	${({ fill }) => fill && 'flex-grow: 1'}
	padding: ${({ theme: { navLinkPaddingY, navLinkPaddingX } }) => `${navLinkPaddingY} ${navLinkPaddingX}`};
	${({ disabled, theme: { navLinkDisabledColor } }) =>
		disabled &&
		css`
			pointer-events: none;
			background-color: transparent;
			border-color: transparent;
			color: ${navLinkDisabledColor};
		`};
	${({
		active,
		type,
		theme: {
			white,
			navTabsLinkActiveColor,
			navTabsLinkActiveBorderColor,
			navTabsLinkActiveBg
		}
	}) =>
		active &&
		`
			border-color: ${navTabsLinkActiveBorderColor} ${navTabsLinkActiveBorderColor} ${white};
			color: ${type === 'pills' ? navPillsLinkActiveColor : navTabsLinkActiveColor};
			background: ${type === 'pills' ? navPillsLinkActiveBg : navTabsLinkActiveBg}
			&:hover,
			&:focus {
				border-bottom-color: ${white};
			}
	`};
`;

StyledNavItem.defaultProps = {
	theme: {
		navLinkPaddingX,
		navLinkPaddingY,
		navLinkDisabledColor,
		navTabsBorderRadius,
		navTabsBorderColor,
		navTabsLinkActiveBorderColor,
		white,
		navTabsLinkActiveColor,
		navTabsLinkActiveBg,
		navPillsLinkActiveBg,
		navPillsLinkActiveColor
	}
};

export { StyledNav, StyledNavItem };
