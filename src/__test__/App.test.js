import React from 'react';
import { shallow, mount } from 'enzyme';
import App from 'containers/App';
import store from 'store';
import { MemoryRouter } from 'react-router-dom';
it('renders without crashing', () => {
  const wrapper = shallow(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(wrapper).toBeDefined();
});

it('should render h2 element', () => {
  const wrapper = mount(
    <MemoryRouter>
      <App store={store} />
    </MemoryRouter>
  );
  expect(wrapper.find('h2')).toHaveLength(1);
});
