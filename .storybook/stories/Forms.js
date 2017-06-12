import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Input from '../../src/components/Forms/Input';
import Select from '../../src/components/Forms/Select';
import Textarea from '../../src/components/Forms/Textarea';

export default storiesOf('Forms', module)
  .add('Input', () => (
    <div style={{ width: 400 }}>
      <label htmlFor="exampleInputText">Example text</label>
      <Input type="text" placeholder="Example text" id="exampleInputText"/>
    </div>
  ))
  .add('Disabled Input', () => (
    <div style={{ width: 400 }}>
      <label htmlFor="exampleInputText2">Email address</label>
      <Input disabled type="text" placeholder="Enter email" id="exampleInputText2"/>
    </div>
  ))
  .add('Select', () => (
    <div style={{ width: 400 }}>
      <label htmlFor="exampleSelect1">Example select</label>
      <Select id="exampleSelect1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Select>
    </div>
  ))
  .add('Textarea', () => (
    <div style={{ width: 400 }}>
      <label htmlFor="exampleTextarea">Example textarea</label>
      <Textarea id="exampleTextarea" rows="3"></Textarea>
    </div>
  ));
