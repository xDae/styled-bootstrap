import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Pagination from '../../src/components/Pagination';


export default storiesOf('Pagination', module)
  .add('Pagination', () =>
    <div style={{ padding: '1.5rem' }}>
      <Pagination>
        <Pagination.Item><Pagination.Link href="#">Previous</Pagination.Link></Pagination.Item>
        <Pagination.Item active><Pagination.Link href="#">1</Pagination.Link></Pagination.Item>
        <Pagination.Item><Pagination.Link href="#">2</Pagination.Link></Pagination.Item>
        <Pagination.Item><Pagination.Link href="#">3</Pagination.Link></Pagination.Item>
        <Pagination.Item disabled><Pagination.Link href="#">Next</Pagination.Link></Pagination.Item>
      </Pagination>
    </div>
  )
  .add('Pagination large', () =>
    <div style={{ padding: '1.5rem' }}>
      <Pagination size="large">
        <Pagination.Item><Pagination.Link href="#">Previous</Pagination.Link></Pagination.Item>
        <Pagination.Item active><Pagination.Link href="#">1</Pagination.Link></Pagination.Item>
        <Pagination.Item><Pagination.Link href="#">2</Pagination.Link></Pagination.Item>
        <Pagination.Item><Pagination.Link href="#">3</Pagination.Link></Pagination.Item>
        <Pagination.Item disabled><Pagination.Link href="#">Next</Pagination.Link></Pagination.Item>
      </Pagination>
    </div>
  )
  .add('Pagination small', () =>
    <div style={{ padding: '1.5rem' }}>
      <Pagination size="small">
        <Pagination.Item><Pagination.Link href="#">Previous</Pagination.Link></Pagination.Item>
        <Pagination.Item active><Pagination.Link href="#">1</Pagination.Link></Pagination.Item>
        <Pagination.Item><Pagination.Link href="#">2</Pagination.Link></Pagination.Item>
        <Pagination.Item><Pagination.Link href="#">3</Pagination.Link></Pagination.Item>
        <Pagination.Item disabled><Pagination.Link href="#">Next</Pagination.Link></Pagination.Item>
      </Pagination>
    </div>
  );
