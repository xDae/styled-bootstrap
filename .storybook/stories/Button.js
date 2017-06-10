import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../../src/components/Button';

const margin = { marginRight: 6, marginBottom: 6 };

export default storiesOf('Buttons', module)
  .add('Basic Buttons', () => (
    <div>
      <Button style={margin} color="primary">Primary Button</Button>
      <Button style={margin} color="secondary">Secondary Button</Button>
      <Button style={margin} color="info">Info Button</Button>
      <Button style={margin} color="success">Success Button</Button>
      <Button style={margin} color="warning">Warning Button</Button>
      <Button style={margin} color="danger">Danger Button</Button>
      <Button style={margin} color="link">Link Button</Button>
    </div>
  ))
  .add('Outline Buttons', () => (
    <div>
      <Button style={margin} color="primary" outline>Primary Button</Button>
      <Button style={margin} color="secondary" outline>Secondary Button</Button>
      <Button style={margin} color="info" outline>Info Button</Button>
      <Button style={margin} color="success" outline>Success Button</Button>
      <Button style={margin} color="warning" outline>Warning Button</Button>
      <Button style={margin} color="danger" outline>Danger Button</Button>
    </div>
  ))
  .add('Large Buttons', () => (
    <div>
      <Button style={margin} color="primary" size="large">Primary Button</Button>
      <Button style={margin} color="secondary" size="large">Secondary Button</Button>
      <Button style={margin} color="info" size="large">Info Button</Button>
      <Button style={margin} color="success" size="large">Success Button</Button>
      <Button style={margin} color="warning" size="large">Warning Button</Button>
      <Button style={margin} color="danger" size="large">Danger Button</Button>
    </div>
  ))
  .add('Small Buttons', () => (
    <div>
      <Button style={margin} color="primary" size="small">Primary Button</Button>
      <Button style={margin} color="secondary" size="small">Secondary Button</Button>
      <Button style={margin} color="info" size="small">Info Button</Button>
      <Button style={margin} color="success" size="small">Success Button</Button>
      <Button style={margin} color="warning" size="small">Warning Button</Button>
      <Button style={margin} color="danger" size="small">Danger Button</Button>
    </div>
  ))
  .add('Block Buttons', () => (
    <div>
      <Button style={margin} color="primary" block>Primary Button</Button>
      <Button style={margin} color="secondary" block>Secondary Button</Button>
      <Button style={margin} color="info" block>Info Button</Button>
      <Button style={margin} color="success" block>Success Button</Button>
      <Button style={margin} color="warning" block>Warning Button</Button>
      <Button style={margin} color="danger" block>Danger Button</Button>
    </div>
  ))
  .add('Link Buttons', () => (
    <div>
      <Button.Link style={margin} color="primary" href="#">Primary Button</Button.Link>
      <Button.Link style={margin} color="secondary" href="#">Secondary Button</Button.Link>
      <Button.Link style={margin} color="info" href="#">Info Button</Button.Link>
      <Button.Link style={margin} color="success" href="#">Success Button</Button.Link>
      <Button.Link style={margin} color="warning" href="#">Warning Button</Button.Link>
      <Button.Link style={margin} color="danger" href="#">Danger Button</Button.Link>
      <Button.Link style={margin} color="link" href="#">Link Button</Button.Link>
    </div>
  ));
