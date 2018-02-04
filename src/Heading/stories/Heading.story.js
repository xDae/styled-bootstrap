import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';

import Heading from '../Heading';

export default storiesOf('Headings', module)
  .addDecorator(
    host({
      align: 'center'
    })
  )
  .add('Default', () => (
    <Fragment>
      <Heading as="h1">H1. Bootstrap heading</Heading>
      <Heading as="h2">H2. Bootstrap heading</Heading>
      <Heading as="h3">H3. Bootstrap heading</Heading>
      <Heading as="h4">H4. Bootstrap heading</Heading>
      <Heading as="h5">H5. Bootstrap heading</Heading>
      <Heading as="h6">H6. Bootstrap heading</Heading>
    </Fragment>
  ))
  .add('With sizes', () => (
    <Fragment>
      <Heading as="h1" size="h6">
        H1. Bootstrap heading with H6 size
      </Heading>
      <Heading as="h2" size="h5">
        H2. Bootstrap heading with H5 size
      </Heading>
      <Heading as="h3" size="h4">
        H3. Bootstrap heading with H4 size
      </Heading>
      <Heading as="h4" size="h3">
        H4. Bootstrap heading with H3 size
      </Heading>
      <Heading as="h5" size="h2">
        H5. Bootstrap heading with H2 size
      </Heading>
      <Heading as="h6" size="h1">
        H6. Bootstrap heading with H1 size
      </Heading>
    </Fragment>
  ));
