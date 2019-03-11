import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { ThemeProvider } from 'styled-components';

import Button from '../Button';

const margin = { marginRight: 6, marginBottom: 6 };

export default storiesOf('Buttons', module)
  .addDecorator(
    host({
      align: 'center',
      width: 460
    })
  )
  .add('Basic Buttons', () => (
    <Fragment>
      <Button style={margin} color="primary">
        Primary
      </Button>
      <Button style={margin} color="secondary">
        Secondary
      </Button>
      <Button style={margin} color="success">
        Success
      </Button>
      <Button style={margin} color="warning">
        Warning
      </Button>
      <Button style={margin} color="danger">
        Danger
      </Button>
      <Button style={margin} color="info">
        Info
      </Button>
      <Button style={margin} color="light">
        Light
      </Button>
      <Button style={margin} color="dark">
        Dark
      </Button>
      <Button style={margin} color="link">
        Link
      </Button>
    </Fragment>
  ))
  .add('Outline Buttons', () => (
    <Fragment>
      <Button style={margin} color="primary" outline>
        Primary
      </Button>
      <Button style={margin} color="secondary" outline>
        Secondary
      </Button>
      <Button style={margin} color="success" outline>
        Success
      </Button>
      <Button style={margin} color="warning" outline>
        Warning
      </Button>
      <Button style={margin} color="danger" outline>
        Danger
      </Button>
      <Button style={margin} color="info" outline>
        Info
      </Button>
      <Button style={margin} color="light" outline>
        Light
      </Button>
      <Button style={margin} color="dark" outline>
        Dark
      </Button>
    </Fragment>
  ))
  .add('Disabled Buttons', () => (
    <Fragment>
      <Button style={margin} color="primary" disabled>
        Primary
      </Button>
      <Button style={margin} color="secondary" disabled>
        Secondary
      </Button>
      <Button style={margin} color="success" disabled>
        Success
      </Button>
      <Button style={margin} color="warning" disabled>
        Warning
      </Button>
      <Button style={margin} color="danger" disabled>
        Danger
      </Button>
      <Button style={margin} color="info" disabled>
        Info
      </Button>
      <Button style={margin} color="light" disabled>
        Light
      </Button>
      <Button style={margin} color="dark" disabled>
        Dark
      </Button>
    </Fragment>
  ))
  .add('Large Buttons', () => (
    <Fragment>
      <Button style={margin} color="primary" size="large">
        Primary
      </Button>
      <Button style={margin} color="secondary" size="large">
        Secondary
      </Button>
      <Button style={margin} color="success" size="large">
        Success
      </Button>
      <Button style={margin} color="warning" size="large">
        Warning
      </Button>
      <Button style={margin} color="danger" size="large">
        Danger
      </Button>
      <Button style={margin} color="info" size="large">
        Info
      </Button>
      <Button style={margin} color="light" size="large">
        Light
      </Button>
      <Button style={margin} color="dark" size="large">
        Dark
      </Button>
      <Button style={margin} color="link" size="large">
        Link
      </Button>
    </Fragment>
  ))
  .add('Small Buttons', () => (
    <Fragment>
      <Button style={margin} color="primary" size="small">
        Primary
      </Button>
      <Button style={margin} color="secondary" size="small">
        Secondary
      </Button>
      <Button style={margin} color="success" size="small">
        Success
      </Button>
      <Button style={margin} color="warning" size="small">
        Warning
      </Button>
      <Button style={margin} color="danger" size="small">
        Danger
      </Button>
      <Button style={margin} color="info" size="small">
        Info
      </Button>
      <Button style={margin} color="light" size="small">
        Light
      </Button>
      <Button style={margin} color="dark" size="small">
        Dark
      </Button>
      <Button style={margin} color="link" size="small">
        Link
      </Button>
    </Fragment>
  ))
  .add('Block Buttons', () => (
    <Fragment>
      <Button style={margin} color="primary" block>
        Primary
      </Button>
      <Button style={margin} color="secondary" block>
        Secondary
      </Button>
      <Button style={margin} color="success" block>
        Success
      </Button>
      <Button style={margin} color="warning" block>
        Warning
      </Button>
      <Button style={margin} color="danger" block>
        Danger
      </Button>
      <Button style={margin} color="info" block>
        Info
      </Button>
      <Button style={margin} color="light" block>
        Light
      </Button>
      <Button style={margin} color="dark" block>
        Dark
      </Button>
      <Button style={margin} color="link" block>
        Link
      </Button>
    </Fragment>
  ))
  .add('Link Buttons', () => (
    <Fragment>
      <Button as="a" href="#" style={margin} color="primary">
        Primary
      </Button>
      <Button as="a" href="#" style={margin} color="secondary">
        Secondary
      </Button>
      <Button as="a" href="#" style={margin} color="success">
        Success
      </Button>
      <Button as="a" href="#" style={margin} color="warning">
        Warning
      </Button>
      <Button as="a" href="#" style={margin} color="danger">
        Danger
      </Button>
      <Button as="a" href="#" style={margin} color="info">
        Info
      </Button>
      <Button as="a" href="#" style={margin} color="light">
        Light
      </Button>
      <Button as="a" href="#" style={margin} color="dark">
        Dark
      </Button>
      <Button as="a" href="#" style={margin} color="link">
        Link
      </Button>
    </Fragment>
  ))

  .add('Custom Buttons', () => (
    <ThemeProvider
      theme={{
        enableRounded: false,
        primary: 'SkyBlue',
        secondary: 'gray',
        success: 'YellowGreen',
        info: 'PowderBlue',
        warning: 'GoldenRod',
        danger: 'FireBrick',
        light: 'ghostWhite',
        dark: 'black',
        linkColor: 'LightSkyBlue',
        linkHoverColor: 'LightCoral'
      }}
    >
      <Fragment>
        <Button style={margin} color="primary" href="#">
          Primary
        </Button>
        <Button style={margin} color="secondary" href="#">
          Secondary
        </Button>
        <Button style={margin} color="success" href="#">
          Success
        </Button>
        <Button style={margin} color="warning" href="#">
          Warning
        </Button>
        <Button style={margin} color="danger" href="#">
          Danger
        </Button>
        <Button style={margin} color="info" href="#">
          Info
        </Button>
        <Button style={margin} color="light" href="#">
          Light
        </Button>
        <Button style={margin} color="dark" href="#">
          Dark
        </Button>
        <Button style={margin} color="link" href="#">
          Link
        </Button>
      </Fragment>
    </ThemeProvider>
  ));
