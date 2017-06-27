// @flow

import styled from 'styled-components';
import PropTypes from 'prop-types';

import { navbarPaddingY, navbarPaddingX } from '../../defaultTheme';

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

    // @include media-breakpoint-down(nth(map-keys($grid-breakpoints), 1)) {
    //   width: 100%;
    //   margin-right: 0;
    //   margin-left: 0;
    // }
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

export default Navbar;
