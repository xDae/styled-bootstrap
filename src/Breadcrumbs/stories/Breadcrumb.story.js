import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';

// import extend, { ThemeProvider } from 'styled-components';

import Breadcrumb from '../index';

const customTheme = {
  closeFontSize: '1.75rem',
  closeFontWeight: 700,
  closeColor: 'red',
  closeTextShadow: '0 1px 0 blue'
};

export default storiesOf('Breadcrumb', module)
  .addDecorator(
    host({
      title:
        'Indicate the current pages location within a navigational hierarchy.',
      align: 'center'
    })
  )
  .add('Breadcrumb', () => (
    <Breadcrumb>
      <Breadcrumb.Item>
        <a href="#">Home</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="#">Library</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  ));
