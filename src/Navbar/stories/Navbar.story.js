import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';

import Navbar, { NavbarToggler } from '../index';
import Collapse from '../../Collapse';


export default storiesOf('Navbar', module)
  .addDecorator(withKnobs)
  .addDecorator(
    host({
      align: 'center',
      width: 460
    })
  )
  .add('Basic example', () => (
    <Navbar>
      <Navbar.Brand href="/">Styled-bootstrap</Navbar.Brand>
      <Navbar.Nav>
				<Navbar.NavItem>
					<Navbar.NavLink href="/#">Styled</Navbar.NavLink>
				</Navbar.NavItem>
				<Navbar.NavItem>
					<Navbar.NavLink href="/#">boot</Navbar.NavLink>
				</Navbar.NavItem>
			</Navbar.Nav>
			<NavbarToggler onClick={() => null} />
			<Collapse isOpen={boolean('Dropstatus', false)}>
				<p>sdkaasd jdfbdsjfaf hdjfdshjf sd jghd </p>
			</Collapse>
    </Navbar>
  ))