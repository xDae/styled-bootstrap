import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';

import { ThemeProvider } from 'styled-components';

import CLoseIcon from '../index';

const customTheme = {
  closeFontSize: '1.75rem',
  closeFontWeight: 700,
  closeColor: 'red',
  closeTextShadow: '0 1px 0 blue'
};

export default storiesOf('CLoseIcon', module)
  .addDecorator(
    host({
      align: 'center'
    })
  )
  .add('Default', () => <CLoseIcon />)
  .add('With custom theme', () => (
    <ThemeProvider theme={customTheme}>
      <CLoseIcon />
    </ThemeProvider>
  ));
