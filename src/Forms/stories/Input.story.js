import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import Input from '../Input';

const customInputTheme = {
  enableRounded: false,
  inputFocusColor: 'SkyBlue',
  inputFocusBorderColor: 'PowderBlue',
  inputFocusBoxShadow: '0 0 0 4px azure'
};

createGlobalStyle`
  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
`;

export default storiesOf('Forms', module)
  .addDecorator(
    host({
      align: 'center',
      width: 400
    })
  )
  .add('Input', () => (
    <Fragment>
      <label htmlFor="exampleInputText">Example text</label>
      <Input
        name="exampleInputText"
        type="text"
        placeholder="Example text"
        id="exampleInputText"
      />
    </Fragment>
  ))
  .add('Input Small', () => (
    <Fragment>
      <label htmlFor="exampleInputText">Example text</label>
      <Input
        size="small"
        type="text"
        placeholder="Example text"
        id="exampleInputText"
      />
    </Fragment>
  ))
  .add('Input Large', () => (
    <Fragment>
      <label htmlFor="exampleInputText">Example text</label>
      <Input
        size="large"
        type="text"
        placeholder="Example text"
        id="exampleInputText"
      />
    </Fragment>
  ))
  .add('Custom text input', () => (
    <ThemeProvider theme={customInputTheme}>
      <Fragment>
        <label htmlFor="exampleInputText2">Custom Text Input</label>
        <Input type="text" placeholder="Enter email" id="exampleInputText2" />
      </Fragment>
    </ThemeProvider>
  ));
