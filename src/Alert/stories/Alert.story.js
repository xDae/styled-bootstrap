import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';

import Alert from '../index';

export default storiesOf('Alert', module)
  .addDecorator(
    host({
      title:
        'Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.',
      align: 'center',
      width: 700
    })
  )
  .add('Default Alert', () => (
    <Fragment>
      <Alert type="primary">This is a primary alert—check it out!</Alert>
      <Alert type="secondary">This is a secondary alert—check it out!</Alert>
      <Alert type="success">This is a success alert—check it out!</Alert>
      <Alert type="danger">This is a danger alert—check it out!</Alert>
      <Alert type="warning">This is a warning alert—check it out!</Alert>
      <Alert type="info">This is a info alert—check it out!</Alert>
      <Alert type="light">This is a light alert—check it out!</Alert>
      <Alert type="dark">This is a dark alert—check it out!</Alert>
    </Fragment>
  ));
