import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';

import Pagination from '../Pagination';

export default storiesOf('Pagination', module)
  .addDecorator(
    host({
      align: 'center'
    })
  )
  .add('Pagination', () => (
    <Pagination>
      <Pagination.Item>
        <Pagination.Link href="#">Previous</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item active>
        <Pagination.Link href="#">1</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link href="#">2</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link href="#">3</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item disabled>
        <Pagination.Link href="#">Next</Pagination.Link>
      </Pagination.Item>
    </Pagination>
  ))
  .add('Pagination large', () => (
    <Pagination size="large">
      <Pagination.Item>
        <Pagination.Link href="#">Previous</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item active>
        <Pagination.Link href="#">1</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link href="#">2</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link href="#">3</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item disabled>
        <Pagination.Link href="#">Next</Pagination.Link>
      </Pagination.Item>
    </Pagination>
  ))
  .add('Pagination small', () => (
    <Pagination size="small">
      <Pagination.Item>
        <Pagination.Link href="#">Previous</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item active>
        <Pagination.Link href="#">1</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link href="#">2</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link href="#">3</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item disabled>
        <Pagination.Link href="#">Next</Pagination.Link>
      </Pagination.Item>
    </Pagination>
  ));
