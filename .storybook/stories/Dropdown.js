import React, { Component } from 'react';
import styled, { extend } from 'styled-components';
import { stripUnit } from 'polished';

import { storiesOf } from '@storybook/react';

import { caretWidth } from '../../src/defaultTheme'

import Dropdown from '../../src/components/Dropdown';
import Button from '../../src/components/Button';

const ButtonWithCaret = Button.extend`
  &:after {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: ${caretWidth};
    vertical-align: middle;
    content: "";
    border-top: ${caretWidth} solid;
    border-right: ${caretWidth} solid transparent;
    border-left: ${caretWidth} solid transparent;
  }

  &:empty:after {
    margin-left: 0;
  }
`;

class DropdownWrapper extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isOpen: true
    }
  }

  toggleDropdown = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }));
  };

  render() {
    return (
      <Dropdown isOpen={this.state.isOpen}>
        <ButtonWithCaret color="secondary" onClick={this.toggleDropdown}>Dropdown button</ButtonWithCaret>
        <Dropdown.Menu>
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#" active>Active item</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#" disabled>disabled item</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

class DropdownWithDivider extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isOpen: true
    }
  }

  toggleDropdown = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }));
  };

  render() {
    return (
      <Dropdown isOpen={this.state.isOpen}>
        <ButtonWithCaret color="secondary" onClick={this.toggleDropdown}>Dropdown button</ButtonWithCaret>
        <Dropdown.Menu>
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#" disabled>disabled item</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Active item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

class DropdownWithHeader extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isOpen: true
    }
  }

  toggleDropdown = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }));
  };

  render() {
    return (
      <Dropdown isOpen={this.state.isOpen}>
        <ButtonWithCaret color="secondary" onClick={this.toggleDropdown}>Dropdown button</ButtonWithCaret>
        <Dropdown.Menu>
          <Dropdown.Header>Dropdown header</Dropdown.Header>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Item href="#">Something here</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}


export default storiesOf('Dropdown', module)
  .add('Dropdown', () => (
    <DropdownWrapper />
  ))
  .add('Dropdown with Divider', () => (
    <DropdownWithDivider />
  ))
  .add('Dropdown with Header', () => (
    <DropdownWithHeader />
  ));
