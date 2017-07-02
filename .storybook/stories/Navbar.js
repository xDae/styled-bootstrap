import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import styled, { injectGlobal } from 'styled-components';

import Navbar, { NavbarToggler } from '../../src/components/Navbar';

export default storiesOf('Navbar', module)
  .add('Navbar', () =>
    <Navbar style={{ backgroundColor: '#f8f9fa', width: '100%' }}>
      <Navbar.Brand href="#">Navbar</Navbar.Brand>

      {/*<NavbarToggler />*/}

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <Navbar.Nav>
          <Navbar.NavItem active>
            <Navbar.NavLink active href="#">Home</Navbar.NavLink>
          </Navbar.NavItem>
          <Navbar.NavItem>
            <Navbar.NavLink href="#">Link</Navbar.NavLink>
          </Navbar.NavItem>
          <Navbar.NavItem>
            <Navbar.NavLink disabled href="#">Disabled</Navbar.NavLink>
          </Navbar.NavItem>
        </Navbar.Nav>
      </div>
    </Navbar>
  )
  .add('Navbar Dark', () =>
    <Navbar color="dark" style={{ backgroundColor: '#343a40', width: '100%' }}>
      {/*<NavbarToggler color="dark" />*/}

      <Navbar.Brand color="dark" href="#">Navbar</Navbar.Brand>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <Navbar.Nav color="dark">
          <Navbar.NavItem>
            <Navbar.NavLink active color="dark" href="#">Home</Navbar.NavLink>
          </Navbar.NavItem>
          <Navbar.NavItem>
            <Navbar.NavLink color="dark" href="#">Link</Navbar.NavLink>
          </Navbar.NavItem>
          <Navbar.NavItem>
            <Navbar.NavLink color="dark" disabled href="#">Disabled</Navbar.NavLink>
          </Navbar.NavItem>
        </Navbar.Nav>
      </div>
    </Navbar>
  )
  .add('NavbarToggler', () => (
    <div>
      <NavbarToggler />

      <div style={{ display: 'inline-block', backgroundColor: '#292b2c', padding: 5, marginLeft: 10 }}>
        <NavbarToggler color="dark" />
      </div>
    </div>
  ));
