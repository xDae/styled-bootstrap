import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

it('renders without crashing', () => {
  const button = document.createElement('button');
  ReactDOM.render(<Button />, button);
});
