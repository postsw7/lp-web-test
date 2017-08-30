import React from 'react';
import { shallow } from 'enzyme';
import Nav from 'components/Nav';
import { MemoryRouter } from 'react-router-dom';

it('should render h2 element', () => {
  const wrapper = shallow(<Nav />);
  const page = <h1>This is NAV page!</h1>;
  expect(wrapper.contains(page)).toEqual(true);
});
