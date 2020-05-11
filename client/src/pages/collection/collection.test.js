import React from 'react';
import { shallow } from 'enzyme';
import { CollectionPage } from './collection.component';

describe('CollectionPage', () => {
  let wrapper;
  let mockItems = [{ id: 1 }, { id: 2 }, { id: 3 }];
  beforeEach(() => {
    const mockCollection = {
      items: mockItems,
      title: 'Test'
    }
    wrapper = shallow(<CollectionPage collection={mockCollection} />);
  });

  it('should render CollectionPage component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
