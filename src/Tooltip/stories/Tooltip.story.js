import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { ThemeProvider } from 'styled-components';

import Tooltip from '../index';

export default storiesOf('Tooltips', module)
  .addDecorator(
    host({
      title: 'The Tooltip, offers a more robust alternative to the Tooltip for displaying overlays of content.',
      align: 'center',
      width: 700
    })
  )
  .add('Default Tooltips', () => (
    <Fragment>
      <div style={{ position: 'relative' }}>
        <Tooltip placement="top">
          Tooltip Top
        </Tooltip>
      </div>
      <div style={{ position: 'relative', marginLeft: '130px' }}>
        <Tooltip placement="bottom">
          Tooltip  Bottom
        </Tooltip>
      </div>
      <div style={{ position: 'relative', marginTop: '80px' }}>
        <Tooltip placement="right">
          Tooltip Right
        </Tooltip>
      </div>
      <div style={{ position: 'relative', marginLeft: '130px' }}>
        <Tooltip placement="left">
          Tooltip Left
        </Tooltip>
      </div>
      <div style={{ position: 'relative', marginTop: '160px' }}>
        <ThemeProvider theme={{ tooltipArrowWidth: '8px'}}>
          <Tooltip placement="left">
            Custom Left
          </Tooltip>
        </ThemeProvider>
      </div>
      <div style={{ position: 'relative', marginLeft: '130px' }}>
        <ThemeProvider theme={{ tooltipBg: 'red' }}>
          <Tooltip placement="top">
            Custom Top
          </Tooltip>
        </ThemeProvider>
      </div>
      <div style={{ position: 'relative', marginTop: '220px' }}>
        <ThemeProvider theme={{ tooltipColor: 'red'}}>
          <Tooltip placement="bottom">
            Custom Buttom
          </Tooltip>
        </ThemeProvider>
      </div>
      <div style={{ position: 'relative', marginLeft: '130px' }}>
        <ThemeProvider theme={{ tooltipOpacity: '0.5' }}>
          <Tooltip placement="right">
            Custom right
          </Tooltip>
        </ThemeProvider>
      </div>
    </Fragment>
  ));
