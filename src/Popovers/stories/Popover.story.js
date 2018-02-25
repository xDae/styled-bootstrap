import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';

import Popover from '../Popover'



export default storiesOf('Popovers', module)
  .addDecorator(
    host({
      title:
      'Popovers',
      align: 'left',
      width: 700,
      left: 700
    })
  )
  .add('Default Popover', () => (
    <Fragment>
      <Popover title="test" placement="top" arrowOffsetLeft={50}>
        BEst</Popover>
    </Fragment>
  ));
