import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../../src/components/Button';

const margin = { marginRight: 6, marginBottom: 6 };

export default storiesOf('Buttons', module)
  .add('Basic Buttons', () => (
    <div style={{ padding: 20}}>
      <Button style={margin} color="primary">Primary</Button>
      <Button style={margin} color="secondary">Secondary</Button>
      <Button style={margin} color="success">Success</Button>
      <Button style={margin} color="warning">Warning</Button>
      <Button style={margin} color="danger">Danger</Button>
      <Button style={margin} color="info">Info</Button>
      <Button style={margin} color="light">Light</Button>
      <Button style={margin} color="dark">Dark</Button>
      <Button style={margin} color="link">Link</Button>
    </div>
  ))
  .add('Outline Buttons', () => (
    <div style={{ padding: 20}}>
      <Button style={margin} color="primary" outline>Primary</Button>
      <Button style={margin} color="secondary" outline>Secondary</Button>
      <Button style={margin} color="success" outline>Success</Button>
      <Button style={margin} color="warning" outline>Warning</Button>
      <Button style={margin} color="danger" outline>Danger</Button>
      <Button style={margin} color="info" outline>Info</Button>
      <Button style={margin} color="light">Light</Button>
      <Button style={margin} color="dark">Dark</Button>
    </div>
  ))
  .add('Large Buttons', () => (
    <div style={{ padding: 20}}>
      <Button style={margin} color="primary" size="large">Primary</Button>
      <Button style={margin} color="secondary" size="large">Secondary</Button>
      <Button style={margin} color="success" size="large">Success</Button>
      <Button style={margin} color="warning" size="large">Warning</Button>
      <Button style={margin} color="danger" size="large">Danger</Button>
      <Button style={margin} color="info" size="large">Info</Button>
      <Button style={margin} color="light" size="large">Light</Button>
      <Button style={margin} color="dark" size="large">Dark</Button>
      <Button style={margin} color="link" size="large">Link</Button>
    </div>
  ))
  .add('Small Buttons', () => (
    <div style={{ padding: 20}}>
      <Button style={margin} color="primary" size="small">Primary</Button>
      <Button style={margin} color="secondary" size="small">Secondary</Button>
      <Button style={margin} color="success" size="small">Success</Button>
      <Button style={margin} color="warning" size="small">Warning</Button>
      <Button style={margin} color="danger" size="small">Danger</Button>
      <Button style={margin} color="info" size="small">Info</Button>
      <Button style={margin} color="light" size="small">Light</Button>
      <Button style={margin} color="dark" size="small">Dark</Button>
      <Button style={margin} color="link" size="small">Link</Button>
    </div>
  ))
  .add('Block Buttons', () => (
    <div style={{ width: 500 }}>
      <Button style={margin} color="primary" block>Primary</Button>
      <Button style={margin} color="secondary" block>Secondary</Button>
      <Button style={margin} color="info" block>Info</Button>
      <Button style={margin} color="success" block>Success</Button>
      <Button style={margin} color="warning" block>Warning</Button>
      <Button style={margin} color="danger" block>Danger</Button>
      <Button style={margin} color="link" block>Link</Button>
    </div>
  ))
  .add('Link Buttons', () => (
    <div style={{ padding: 20}}>
      <Button.Link style={margin} color="primary" href="#">Primary</Button.Link>
      <Button.Link style={margin} color="secondary" href="#">Secondary</Button.Link>
      <Button.Link style={margin} color="info" href="#">Info</Button.Link>
      <Button.Link style={margin} color="success" href="#">Success</Button.Link>
      <Button.Link style={margin} color="warning" href="#">Warning</Button.Link>
      <Button.Link style={margin} color="danger" href="#">Danger</Button.Link>
      <Button.Link style={margin} color="link" href="#">Link</Button.Link>
    </div>
  ));
