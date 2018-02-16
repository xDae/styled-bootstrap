import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';

import { caretWidth } from '../../utils/src/defaultTheme';

import Dropdown from '../Dropdown';
import Button from '../../Button';

const ButtonWithCaret = Button.extend`
  &:after {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: ${caretWidth};
    vertical-align: middle;
    content: '';
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
    };
  }

  toggleDropdown = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }));
  };

  render() {
    return (
      <Dropdown isOpen={this.state.isOpen} align={this.props.align}>
        <ButtonWithCaret onClick={this.toggleDropdown}>
          Dropdown button
        </ButtonWithCaret>
        <Dropdown.Menu>
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#" active>
            Active item
          </Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#" disabled>
            disabled item
          </Dropdown.Item>
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
    };
  }

  toggleDropdown = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }));
  };

  render() {
    return (
      <Dropdown isOpen={this.state.isOpen}>
        <ButtonWithCaret color="success" onClick={this.toggleDropdown}>
          Dropdown button
        </ButtonWithCaret>
        <Dropdown.Menu>
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#" disabled>
            disabled item
          </Dropdown.Item>
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
    };
  }

  toggleDropdown = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }));
  };

  render() {
    return (
      <Dropdown isOpen={this.state.isOpen}>
        <ButtonWithCaret color="warning" onClick={this.toggleDropdown}>
          Dropdown button
        </ButtonWithCaret>
        <Dropdown.Menu>
          <Dropdown.Header as="h3">Dropdown header</Dropdown.Header>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Item href="#">Something here</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default storiesOf('Dropdown', module)
  .addDecorator(
    host({
      align: 'center'
    })
  )
  .add('Dropdown', () => <DropdownWrapper />)
  .add('Dropdown right aligned', () => <DropdownWrapper align="right" />)
  .add('Dropdown with Divider', () => <DropdownWithDivider />)
  .add('Dropdown with Header', () => <DropdownWithHeader />);
