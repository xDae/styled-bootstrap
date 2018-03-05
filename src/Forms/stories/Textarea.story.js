import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { withKnobs } from '@storybook/addon-knobs/react';

import Textarea from '../Textarea';

export default storiesOf('Forms', module)
  .addDecorator(withKnobs)
  .addDecorator(
    host({
      align: 'center',
      width: 400
    })
  )
  .add('Textarea', () => (
    <Fragment>
      <label htmlFor="exampleTextarea">Example textarea</label>
      <Textarea id="exampleTextarea" rows="3" />
    </Fragment>
  ));
