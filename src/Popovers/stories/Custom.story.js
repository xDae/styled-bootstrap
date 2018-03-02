import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import styled, { ThemeProvider } from 'styled-components';

import Popover from '../Popover';

const customTheme = {
  popoverTitleBbg: 'green',
  popoverBg: '#cce4ff',
  popoverBorderColor: 'green'
};

const ColorChange = styled(Popover)`
  h3 {
    color: pink;
  }
`;

export default storiesOf('Popovers', module)
  .addDecorator(
    host({
      align: 'center',
      width: 700
    })
  )
  .add('Customized Popovers', () => (
    <ThemeProvider theme={customTheme}>
      <Fragment>
        <Popover title="Top" placement="top" arrowOffset={30} positionLeft={20}>
          This popover is placed <strong>top</strong> with positionLeft=20 and arrowOffset=30
        </Popover>
        <ColorChange title="bottom" placement="bottom" positionLeft={20} positionTop={120}>
          This popover is placed <strong>bottom</strong> with positionLeft=20 and positionTop=120
        </ColorChange>
        <Popover title="right" placement="right" positionLeft={330} positionTop={120}>
          This popover is placed <strong>right</strong> with positionLeft=330 and positionTop=120
        </Popover>
        <Popover title="left" placement="left" positionLeft={330}>
          This popover is placed <strong>left</strong> with positionLeft=330
        </Popover>
      </Fragment>
    </ThemeProvider>
  ));
