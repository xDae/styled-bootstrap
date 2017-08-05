import React from 'react';
import { storiesOf } from '@storybook/react';

import ListGroup from '../../src/components/ListGroup';
import ListGroupItem from '../../src/components/ListGroup/ListGroupItem';
import ListGroupLink from '../../src/components/ListGroup/ListGroupLink';
import ListGroupButton from '../../src/components/ListGroup/ListGroupButton';

const margin = { marginRight: 6, marginBottom: 6 };

export default storiesOf('ListGroup', module)
  .add('Basic example', () => (
    <div style={{ width: 400, padding: 20}}>
      <ListGroup>
        <ListGroupItem active>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
    </div>
  ))
  .add('Disabled items', () => (
    <div style={{ width: 400, padding: 20 }}>
      <ListGroup>
        <ListGroupItem disabled>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
    </div>
  ))
  .add('Links', () => (
    <div style={{ width: 400, padding: 20 }}>
      <ListGroup>
        <ListGroupLink href="#" active>Cras justo odio</ListGroupLink>
        <ListGroupLink href="#">Dapibus ac facilisis in</ListGroupLink>
        <ListGroupLink href="#">Morbi leo risus</ListGroupLink>
        <ListGroupLink href="#">Porta ac consectetur ac</ListGroupLink>
        <ListGroupLink href="#" disabled>Vestibulum at eros</ListGroupLink>
      </ListGroup>
    </div>
  ))
  .add('Buttons', () => (
    <div style={{ width: 400, padding: 20 }}>
      <ListGroup>
        <ListGroupButton href="#" active>Cras justo odio</ListGroupButton>
        <ListGroupButton href="#">Dapibus ac facilisis in</ListGroupButton>
        <ListGroupButton href="#">Morbi leo risus</ListGroupButton>
        <ListGroupButton href="#">Porta ac consectetur ac</ListGroupButton>
        <ListGroupButton href="#" disabled>Vestibulum at eros</ListGroupButton>
      </ListGroup>
    </div>
  ));
