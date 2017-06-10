import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from '../../src/components/Card';
import Button from '../../src/components/Button';
import Headings from '../../src/components/Headings';

export default storiesOf('Card', module)
  .add('Card', () => (
    <Card style={{ width: '20rem' }}>
      <img src="http://placehold.it/318x180" alt=""/>
      <Card.Block>
        <Headings.h4>Card title</Headings.h4>
        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Button.Link href="#" color="primary">Go somewhere</Button.Link>
      </Card.Block>
    </Card>
  ));
