import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';

import Popover from '../Popover';

export default storiesOf('Popovers', module)
  .addDecorator(
    host({
      title: 'The Popover, offers a more robust alternative to the Tooltip for displaying overlays of content.',
      align: 'center',
      width: 700
    })
  )
  .add('Default Popovers', () => (
    <Fragment>
      <Popover title="Top" placement="top" arrowOffset={30} positionLeft={20}>
        This popover is placed <strong>top</strong> with positionLeft=20 and arrowOffset=30
      </Popover>
      <Popover title="bottom" placement="bottom" positionLeft={20} positionTop={120}>
        This popover is placed <strong>bottom</strong> with positionLeft=20 and positionTop=120
      </Popover>
      <Popover title="right" placement="right" positionLeft={330} positionTop={120}>
        This popover is placed <strong>right</strong> with positionLeft=330 and positionTop=120
      </Popover>
      <Popover title="left" placement="left" positionLeft={330}>
        This popover is placed <strong>left</strong> with positionLeft=330
      </Popover>
    </Fragment>
  ));
