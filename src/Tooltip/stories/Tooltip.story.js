import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { ThemeProvider } from 'styled-components';
import { withKnobs, select, text, color } from '@storybook/addon-knobs'

import Tooltip from '../index';

export default storiesOf('Tooltips', module)
  .addDecorator(
    host({
      title: 'The Tooltip, offers a more robust alternative to the Tooltip for displaying overlays of content.',
      align: 'center',
      width: 700
    })
  )
  .addDecorator(withKnobs)
  .add('Tooltips', () => {
    const customTheme = {
      tooltipBg: color('background', 'black'),
      tooltipOpacity: text('opacity', '0.9'),
      tooltipColor: color('color', 'white')
    };

    return (
      <Fragment>
        <div style={{ position: 'relative' }}>
          <Tooltip>
            Default Tooltip
          </Tooltip>
        </div>
        <div style={{ position: 'relative', marginLeft: '130px' }}>
          <ThemeProvider theme={customTheme}>
            <Tooltip placement={select('placement', ['top', 'bottom', 'right', 'left'], 'top')}>
              Custom tooltip
            </Tooltip>
          </ThemeProvider>
        </div>
      </Fragment>
    )
  }
);
