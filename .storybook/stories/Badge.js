import React from 'react';
import { storiesOf } from '@storybook/react';

import Badge from '../../src/components/Badge/Badge';

const margin = { marginRight: 6, marginBottom: 6 };

export default storiesOf('Badge', module)
  .add('Badges', () => (
    <div>
      <h1>Example heading <Badge>New</Badge></h1>
      <h2>Example heading <Badge>New</Badge></h2>
      <h3>Example heading <Badge>New</Badge></h3>
      <h4>Example heading <Badge>New</Badge></h4>
      <h5>Example heading <Badge>New</Badge></h5>
      <h6>Example heading <Badge>New</Badge></h6>
    </div>
  ))
  .add('Default Badges', () => (
    <div>
      <Badge style={margin}>Default</Badge>
      <Badge style={margin} color="primary">Primary</Badge>
      <Badge style={margin} color="success">Success</Badge>
      <Badge style={margin} color="info">Info</Badge>
      <Badge style={margin} color="warning">Warning</Badge>
      <Badge style={margin} color="danger">Danger</Badge>
    </div>
  ))
  .add('Pill Badges', () => (
    <div>
      <Badge style={margin} pill>Default</Badge>
      <Badge style={margin} color="primary" pill>Primary</Badge>
      <Badge style={margin} color="success" pill>Success</Badge>
      <Badge style={margin} color="info" pill>Info</Badge>
      <Badge style={margin} color="warning" pill>Warning</Badge>
      <Badge style={margin} color="danger" pill>Danger</Badge>
    </div>
  ));
