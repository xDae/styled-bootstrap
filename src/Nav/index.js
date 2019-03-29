import React from 'react';
import { StyledNav, StyledNavItem } from './StyledNav';

const Nav = ({ children, ...props }) => {
	const { type, fill } = props;
	const childrenWithProps = React.Children.map(children, child =>
		React.cloneElement(child, { type, fill })
	);
	return <StyledNav {...props}>{childrenWithProps}</StyledNav>;
};

const NavItem = ({ children, ...props }) => (
	<StyledNavItem {...props}>{children}</StyledNavItem>
);

Nav.Item = NavItem;

export default Nav;
