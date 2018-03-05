import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { withKnobs, select } from '@storybook/addon-knobs/react';

import CustomSelect from '../CustomSelect';

export default storiesOf('Forms', module)
  .addDecorator(withKnobs)
  .addDecorator(
    host({
      align: 'center',
      width: 400
    })
  )
  .add('CustomSelect', () => (
    <Fragment>
      <label htmlFor="CustomSelect">CustomSelect example</label>
      <CustomSelect
        id="CustomSelect"
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
      </CustomSelect>
    </Fragment>
  ));
