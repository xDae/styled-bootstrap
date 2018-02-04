import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';

// import extend, { ThemeProvider } from 'styled-components';

import Badge from '../Badge';

const customTheme = {
  closeFontSize: '1.75rem',
  closeFontWeight: 700,
  closeColor: 'red',
  closeTextShadow: '0 1px 0 blue'
};

const margin = { marginRight: 6, marginBottom: 6 };

export default storiesOf('Badge', module)
  .addDecorator(
    host({
      title: 'Small count and labeling component.',
      align: 'center'
    })
  )
  .add('Badges', () => (
    <Fragment>
      <h1>
        Example heading <Badge color="secondary">New</Badge>
      </h1>
      <h2>
        Example heading <Badge color="secondary">New</Badge>
      </h2>
      <h3>
        Example heading <Badge color="secondary">New</Badge>
      </h3>
      <h4>
        Example heading <Badge color="secondary">New</Badge>
      </h4>
      <h5>
        Example heading <Badge color="secondary">New</Badge>
      </h5>
      <h6>
        Example heading <Badge color="secondary">New</Badge>
      </h6>
    </Fragment>
  ))
  .add('Color Badges', () => (
    <Fragment>
      <Badge style={margin} color="primary">
        Primary
      </Badge>
      <Badge style={margin} color="secondary">
        Secondary
      </Badge>
      <Badge style={margin} color="success">
        Success
      </Badge>
      <Badge style={margin} color="danger">
        Danger
      </Badge>
      <Badge style={margin} color="warning">
        Warning
      </Badge>
      <Badge style={margin} color="info">
        Info
      </Badge>
      <Badge style={margin} color="light">
        Light
      </Badge>
      <Badge style={margin} color="dark">
        Dark
      </Badge>
    </Fragment>
  ))
  .add('Link Badges', () => (
    <Fragment>
      <Badge.Link href="#" style={margin} color="primary">
        Primary
      </Badge.Link>
      <Badge.Link href="#" style={margin} color="secondary">
        Secondary
      </Badge.Link>
      <Badge.Link href="#" style={margin} color="success">
        Success
      </Badge.Link>
      <Badge.Link href="#" style={margin} color="danger">
        Danger
      </Badge.Link>
      <Badge.Link href="#" style={margin} color="warning">
        Warning
      </Badge.Link>
      <Badge.Link href="#" style={margin} color="info">
        Info
      </Badge.Link>
      <Badge.Link href="#" style={margin} color="light">
        Light
      </Badge.Link>
      <Badge.Link href="#" style={margin} color="dark">
        Dark
      </Badge.Link>
    </Fragment>
  ))
  .add('Pill Badges', () => (
    <Fragment>
      <Badge style={margin} color="primary" pill>
        Primary
      </Badge>
      <Badge style={margin} color="secondary" pill>
        Secondary
      </Badge>
      <Badge style={margin} color="success" pill>
        Success
      </Badge>
      <Badge style={margin} color="info" pill>
        Info
      </Badge>
      <Badge style={margin} color="warning" pill>
        Warning
      </Badge>
      <Badge style={margin} color="danger" pill>
        Danger
      </Badge>
      <Badge style={margin} color="light" pill>
        Light
      </Badge>
      <Badge style={margin} color="dark" pill>
        Dark
      </Badge>
    </Fragment>
  ));
