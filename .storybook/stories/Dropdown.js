import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import Dropdown from '../../src/components/Dropdown/Dropdown';
import Button from '../../src/components/Button/Button';


class DropdownWrapper extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isOpen: false
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
        <Button color="secondary" onClick={this.toggleDropdown}>Dropdown button</Button>
        <Dropdown.Menu>
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}


export default storiesOf('Dropdown', module)
  .add('Dropdown', () => (
    <DropdownWrapper />
  ));
