import React from 'react';
import { shallow } from 'enzyme';

import { MenuItem } from './menu-item.component';

describe('MenuItem Component', () => {
  let wrapper;
  let mockMatch;
  let mockHistory;
  const linkUrl = '/hats';
  const size = 'large';
  const imageUrl = 'testimage';

  beforeEach(() => {
    mockMatch = {
      url: '/shop'
    };

    mockHistory = {
      push: jest.fn()
    };

    const mockProps = {
      match: mockMatch,
      title: 'hats',
      size,
      history: mockHistory,
      imageUrl,
      linkUrl
    };

    wrapper = shallow(<MenuItem {...mockProps}/>);
  });

  it('should render MenuItem component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call history.push when menu-item is clicked', () => {
    wrapper.find("[id='menuitem']").simulate('click');
    expect(mockHistory.push).toHaveBeenCalledWith(`${mockMatch.url}${linkUrl}`);
  });
});