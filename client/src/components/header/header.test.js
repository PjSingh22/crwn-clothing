import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './header.component';

describe('Header component', () => {
  let wrapper; 
  let mockSignOutStart;

  beforeEach(() => {
    mockSignOutStart = jest.fn();

    const mockProps = {
      hidden: true,
      currentUser: {
        uid: '123'
      },
      signOutStart: mockSignOutStart
    };
    wrapper = shallow(<Header {...mockProps}/>);
  });

  it('should render Header component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  
});