import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('should render h2 element', () => {
  const wrapper = shallow(<App />);
  const h2El = <h2>Checking Sever!</h2>;
  expect(wrapper.contains(h2El)).toEqual(true);
});
