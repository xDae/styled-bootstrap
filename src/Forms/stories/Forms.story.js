import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { ThemeProvider, injectGlobal } from 'styled-components';

import Input from '../Input';
// import Select from '../Select';
// import Textarea from '../Textarea';

const customInputTheme = {
  enableRounded: false,
  inputFocusColor: 'SkyBlue',
  inputFocusBorderColor: 'PowderBlue',
  inputFocusBoxShadow: '0 0 0 4px azure'
};

injectGlobal`
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
      title:
        'Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.',
      align: 'center',
      width: 700
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
// .add('Select', () => (
//   <div style={{ width: 400 }}>
//     <label htmlFor="exampleSelect1">Example select</label>
//     <Select id="exampleSelect1">
//       <option>1</option>
//       <option>2</option>
//       <option>3</option>
//       <option>4</option>
//       <option>5</option>
//     </Select>
//   </div>
// ))
// .add('Textarea', () => (
//   <div style={{ width: 400 }}>
//     <label htmlFor="exampleTextarea">Example textarea</label>
//     <Textarea id="exampleTextarea" rows="3" />
//   </div>
// ))
// .add('Full form', () => (
//   <form style={{ width: 625 }}>
//     <div className="form-group">
//       <label htmlFor="exampleFormControlInput1">Email address</label>
//       <Input
//         type="email"
//         placeholder="name@example.com"
//         id="exampleFormControlInput1"
//       />
//     </div>
//     <div className="form-group">
//       <label htmlFor="exampleFormControlSelect1">Example select</label>
//       <Select id="exampleFormControlSelect1">
//         <option>1</option>
//         <option>2</option>
//         <option>3</option>
//         <option>4</option>
//         <option>5</option>
//       </Select>
//     </div>
//     <div className="form-group">
//       <label htmlFor="exampleFormControlSelect2">
//         Example multiple select
//       </label>
//       <Select multiple id="exampleFormControlSelect2">
//         <option>1</option>
//         <option>2</option>
//         <option>3</option>
//         <option>4</option>
//         <option>5</option>
//       </Select>
//     </div>
//     <div className="form-group">
//       <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
//       <Textarea id="exampleFormControlTextarea1" rows="3" />
//     </div>
//   </form>
// ));
