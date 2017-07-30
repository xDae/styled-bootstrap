import React from 'react';
import { storiesOf } from '@storybook/react';

import ListGroup from '../../src/components/ListGroup';
import ListGroupItem from '../../src/components/ListGroup/ListGroupItem';

const margin = { marginRight: 6, marginBottom: 6 };

export default storiesOf('ListGroup', module)
  .add('Basic example', () => (
    <div style={{ width: 400, padding: 20}}>
      <ListGroup>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
    </div>
  ));
