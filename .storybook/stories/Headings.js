import React from 'react';
import { storiesOf } from '@storybook/react';

import Heading from '../../src/components/Headings';

export default storiesOf('Headings', module)
  .add('Semantic Headers', () => (
    <div>
      <Heading.h1>H1. Bootstrap heading</Heading.h1>
      <Heading.h2>H2. Bootstrap heading</Heading.h2>
      <Heading.h3>H3. Bootstrap heading</Heading.h3>
      <Heading.h4>H4. Bootstrap heading</Heading.h4>
      <Heading.h5>H5. Bootstrap heading</Heading.h5>
      <Heading.h6>H6. Bootstrap heading</Heading.h6>
    </div>
  ))
  .add('With sizes', () => (
    <div>
      <Heading.h1 size="h6">H1. Bootstrap heading with H6 size</Heading.h1>
      <Heading.h2 size="h5">H2. Bootstrap heading with H5 size</Heading.h2>
      <Heading.h3 size="h4">H3. Bootstrap heading with H4 size</Heading.h3>
      <Heading.h4 size="h3">H4. Bootstrap heading with H3 size</Heading.h4>
      <Heading.h5 size="h2">H5. Bootstrap heading with H2 size</Heading.h5>
      <Heading.h6 size="h1">H6. Bootstrap heading with H1 size</Heading.h6>
    </div>
  ));
