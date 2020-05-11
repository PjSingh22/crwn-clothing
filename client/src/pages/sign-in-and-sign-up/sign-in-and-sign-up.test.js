import React from 'react';
import { shallow } from 'enzyme';
import SignInAndSignUp from './sign-in-and-sign-up.component';

it('should render SignInAndSignUp component', () => {
  expect(shallow(<SignInAndSignUp />)).toMatchSnapshot();
})