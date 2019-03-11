import React from 'react';
import { storiesOf } from '@storybook/react';

import Jumbotron from '../Jumbotron';
import Button from '../../Button';
import Heading from '../../Heading';

export default storiesOf('Jumbotron', module)
  .add('Jumbotron', () => (
    <div style={{ width: '99vh', margin: '0 auto'}}>
      <Jumbotron>
        <Heading>Hello, world!</Heading>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4" />
        <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button as="a" color="primary" size="large" href="#" role="button">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  ))
  .add('Fluid Jumbotron', () => (
    <div style={{ width: '100%'}}>
      <Jumbotron fluid>
        <Heading>Hello, world!</Heading>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4" />
        <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button as="a" color="primary" size="large" href="#" role="button">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  ));
