import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './homepage.component';

expect.assertions(1);
it('renders HomePage component', () => {
  expect(shallow(<HomePage />)).toMatchSnapshot();
});
