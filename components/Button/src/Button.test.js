import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Button from './Button';

it('renders without crashing', () => {
  const button = document.createElement('button');
  ReactDOM.render(<Button />, button);
});

test('it works', () => {
  const wrapper = shallow(<Button />);
  expect(wrapper).toMatchSnapshot();
});
