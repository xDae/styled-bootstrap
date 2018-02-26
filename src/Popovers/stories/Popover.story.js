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
      <Popover title="test" placement="top" arrowOffsetLeft={60} >
        BEst</Popover>
        <div style={{marginTop: '150px', height: '70px', position: 'relative'}}>SKATA
        <Popover title="test" placement="bottom">
            BEst
            </Popover>
</div>
    </Fragment>
  ));

/*
/   <Popover title="test" placement="bottom" arrowOffsetLeft={50}>
//     BEst</Popover>

*/
