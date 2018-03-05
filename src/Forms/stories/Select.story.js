import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { withKnobs, select } from '@storybook/addon-knobs/react';

import Select from '../Select';

export default storiesOf('Forms', module)
  .addDecorator(withKnobs)
  .addDecorator(
    host({
      align: 'center',
      width: 400
    })
  )
  .add('Select', () => (
    <Fragment>
      <label htmlFor="exampleSelect1">Select input</label>
      <Select
        id="exampleSelect1"
        size={select(
          'Size',
          {
            normal: 'Normal',
            small: 'Small',
            large: 'Large'
          },
          'normal'
        )}
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Select>
    </Fragment>
  ));
