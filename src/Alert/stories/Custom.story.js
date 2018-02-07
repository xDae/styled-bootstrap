import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { action } from '@storybook/addon-actions';

import styled, { ThemeProvider } from 'styled-components';

import Alert, { DismissableAlert } from '../index';
import CloseIcon from '../../CLoseIcon';

const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  color: green;
  top: 0;
  right: 0;
  padding: 0.75rem 1.25rem;
`;

const customTheme = {
  alertPaddingY: '.5rem',
  alertPaddingX: '1rem',
  alertMarginBottom: '1rem',
  alertBorderRadius: '0.5rem',
  alertLinkFontWeight: 'normal',
  alertBorderWidth: '2px',

  alertBgLevel: -9,
  alertBorderLevel: -5,
  alertColorLevel: 3
};

const customButtonTheme = {
  closeFontWeight: 700,
  closeColor: 'red',
  closeTextShadow: '0 1px 0 blue'
};

export default storiesOf('Alert', module)
  .addDecorator(
    host({
      align: 'center',
      width: 700
    })
  )
  .add('With custom Close Icon', () => (
    <ThemeProvider theme={customButtonTheme}>
      <Fragment>
        <DismissableAlert
          type="primary"
          onClose={action('button-click')}
          closeIcon={<StyledCloseIcon />}
        >
          This is a dark alert with <a href="#">an example link</a>. Give it a
          click if you like.
        </DismissableAlert>
        <DismissableAlert type="warning" onClose={action('button-click')}>
          This is a dark alert with <a href="#">an example link</a>. Give it a
          click if you like.
        </DismissableAlert>
      </Fragment>
    </ThemeProvider>
  ))
  .add('With ThemeProvider', () => (
    <ThemeProvider theme={customTheme}>
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
    </ThemeProvider>
  ));
