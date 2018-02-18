import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';

import Select from '../Select';

export default storiesOf('Forms', module)
  .addDecorator(
    host({
      align: 'center',
      width: 400
    })
  )
  .add('Select', () => (
    <Fragment>
      <label htmlFor="exampleSelect1">Select input</label>
      <Select id="exampleSelect1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Select>
    </Fragment>
  ));
