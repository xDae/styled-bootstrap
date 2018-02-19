import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';

import Input from '../Input';
import Select from '../Select';
import Textarea from '../Textarea';
import FormGroup from '../FormGroup';

export default storiesOf('Forms', module)
  .addDecorator(
    host({
      align: 'center',
      width: 620
    })
  )
  .add('Full form', () => (
    <Fragment>
      <FormGroup>
        <label htmlFor="exampleFormControlInput1">Email address</label>
        <Input
          type="email"
          placeholder="name@example.com"
          id="exampleFormControlInput1"
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="exampleFormControlSelect1">Example select</label>
        <Select id="exampleFormControlSelect1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <label htmlFor="exampleFormControlSelect2">
          Example multiple select
        </label>
        <Select multiple id="exampleFormControlSelect2">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
        <Textarea id="exampleFormControlTextarea1" rows="3" />
      </FormGroup>
    </Fragment>
  ));
