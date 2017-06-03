import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Breadcrumb from '../../src/components/Breadcrumbs/Breadcrumb';
import Button from '../../src/components/Button/Button';
import Headings from '../../src/components/Headings/Headings';

export default storiesOf('Breadcrumb', module)
  .add('Breadcrumb', () => (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Data</Breadcrumb.Item>
      <Breadcrumb.Item active>Bootstrap</Breadcrumb.Item>
    </Breadcrumb>
  ));
