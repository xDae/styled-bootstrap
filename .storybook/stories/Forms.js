import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Input from '../../src/components/Forms/Input';

export default storiesOf('Forms', module)
  .add('Input', () => (
    <div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <Input type="email" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
    </div>
  ));
