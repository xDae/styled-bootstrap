import React from 'react';
import { storiesOf } from '@storybook/react';

import Breadcrumb from '../../src/components/Breadcrumbs';
import Button from '../../src/components/Button';
import Headings from '../../src/components/Headings';

export default storiesOf('Breadcrumb', module).add('Breadcrumb', () =>
  <div style={{ width: '80vw' }}>
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Data</Breadcrumb.Item>
      <Breadcrumb.Item active>Bootstrap</Breadcrumb.Item>
    </Breadcrumb>
  </div>
);
