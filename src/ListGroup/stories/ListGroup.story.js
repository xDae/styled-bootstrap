import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { withKnobs } from '@storybook/addon-knobs/react';

import ListGroup from '../ListGroup';
import ListGroupItem from '../ListGroupItem';
import ListGroupLink from '../ListGroupLink';
import ListGroupButton from '../ListGroupButton';

export default storiesOf('ListGroup', module)
  .addDecorator(withKnobs)
  .addDecorator(
    host({
      align: 'center',
      width: 460
    })
  )
  .add('Basic example', () => (
    <ListGroup>
      <ListGroupItem>Cras justo odio</ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem active>Morbi leo risus</ListGroupItem>
      <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
      <ListGroupItem>Vestibulum at eros</ListGroupItem>
    </ListGroup>
  ))
  .add('FLush', () => (
    <ListGroup flush>
      <ListGroupItem>Cras justo odio</ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem active>Morbi leo risus</ListGroupItem>
      <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
      <ListGroupItem>Vestibulum at eros</ListGroupItem>
    </ListGroup>
  ))
  .add('Disabled items', () => (
    <ListGroup>
      <ListGroupItem>Cras justo odio</ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem disabled>Morbi leo risus</ListGroupItem>
      <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
      <ListGroupItem>Vestibulum at eros</ListGroupItem>
    </ListGroup>
  ))
  .add('Links', () => (
    <ListGroup>
      <ListGroupLink href="#" active>
        Cras justo odio
      </ListGroupLink>
      <ListGroupLink href="#">Dapibus ac facilisis in</ListGroupLink>
      <ListGroupLink href="#">Morbi leo risus</ListGroupLink>
      <ListGroupLink disabled href="#">
        Porta ac consectetur ac
      </ListGroupLink>
      <ListGroupLink href="#">Vestibulum at eros</ListGroupLink>
    </ListGroup>
  ))
  .add('Buttons', () => (
    <ListGroup>
      <ListGroupButton>Cras justo odio</ListGroupButton>
      <ListGroupButton active>Dapibus ac facilisis in</ListGroupButton>
      <ListGroupButton>Morbi leo risus</ListGroupButton>
      <ListGroupButton>Porta ac consectetur ac</ListGroupButton>
      <ListGroupButton disabled>Vestibulum at eros</ListGroupButton>
    </ListGroup>
  ))
  .add('Contextual classes', () => (
    <ListGroup>
      <ListGroupItem color="primary">Cras justo odio</ListGroupItem>
      <ListGroupButton color="secondary">This is a button</ListGroupButton>
      <ListGroupLink href="#" color="success">
        This is a link
      </ListGroupLink>
      <ListGroupItem color="danger">Porta ac consectetur ac</ListGroupItem>
      <ListGroupItem color="warning">Vestibulum at eros</ListGroupItem>
      <ListGroupItem color="info">Vestibulum at eros</ListGroupItem>
      <ListGroupItem color="light">Vestibulum at eros</ListGroupItem>
      <ListGroupItem color="dark">Vestibulum at eros</ListGroupItem>
    </ListGroup>
  ));
