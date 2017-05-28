import React from 'react';
import ReactDOM from 'react-dom';
import Button from './ButtonV2';

it('renders without crashing', () => {
  const button = document.createElement('button');
  ReactDOM.render(<Button />, button);
});
