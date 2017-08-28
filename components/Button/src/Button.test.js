import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Button from './Button';

test('it works', () => {
  const wrapper = shallow(<Button />);
  expect(wrapper).toMatchSnapshot();
});
