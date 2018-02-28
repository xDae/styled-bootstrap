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
      <div style={{ position: 'realative' }}>
        <Popover title="top" placement="top" arrowOffset={60}>
          BEst
        </Popover>
      </div>
      <div style={{ marginLeft: '150px', position: 'relative' }}>
        <Popover title="bottom" placement="bottom">
          BEst
        </Popover>
      </div>
      <div style={{ margin: '150px 0px', position: 'relative' }}>
        <Popover title="right" placement="right">
          BEst
        </Popover>
      </div>
      <div style={{ margin: '150px 150px', position: 'relative' }}>
        <Popover title="left" placement="left">
          BEst
        </Popover>
      </div>
    </Fragment>
  ));

/*
/   <Popover title="test" placement="bottom" arrowOffset={50}>
//     BEst</Popover>

*/
