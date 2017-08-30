import React from 'react';
import { shallow, mount } from 'enzyme';
import App from 'components/App';
import { MemoryRouter } from 'react-router-dom';
import 'styles/css/App.css';

describe('<App />', () => {
  const props = {
    stores: {
      status: 'status',
      brands: [],
    },
    pages: {
      number: 1,
    },
  };
  it('renders without crashing', () => {
    const wrapper = mount(
      <MemoryRouter>
        <App {...props} />
      </MemoryRouter>
    );
    expect(wrapper).toBeDefined();
  });

  it('should render h2 element', () => {
    const wrapper = shallow(<App {...props} />);
    expect(wrapper.find('h2')).toHaveLength(1);
  });
});
