import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';

import Card from '../Card';
import CardImage from '../CardImage';
import Button from '../../Button';
import Heading from '../../Heading';

export default storiesOf('Card', module)
  .addDecorator(
    host({
      title:
        'A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.',
      align: 'center',
      width: 320
    })
  )
  .add('Card', () => (
    <Card>
      <Card.Body>
        <Heading as="h5">Card title</Heading>
        <p>
          With supporting text below as a natural lead-in to additional content.
        </p>
        <Button as="a" href="#" color="primary">
          Button
        </Button>
      </Card.Body>
    </Card>
  ))
  .add('With Image', () => (
    <Card>
      <CardImage src="http://placehold.it/318x180" alt="card image" />
      <Card.Body>
        <Heading as="h4">Card title</Heading>
        <p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Button as="a" href="#" color="primary">
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  ))
  .add('Card with Header and Footer', () => (
    <Card>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Heading as="h4">Card title</Heading>
        <p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Button as="a" href="#" color="primary">
          Go somewhere
        </Button>
      </Card.Body>
      <Card.Footer>2 days ago</Card.Footer>
    </Card>
  ));
