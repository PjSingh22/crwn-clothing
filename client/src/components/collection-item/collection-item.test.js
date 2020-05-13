import React from 'react';
import { shallow } from 'enzyme';

import { CollectionItem } from './collection-item.component';

describe('CollectionItem component', () => {
  let wrapper;
  let mockAddItem;
  const imageUrl = 'www.someimage.gov';
  const mockName = 'nonobeads';
  const mockPrice = 69

  beforeEach(() => {
    mockAddItem = jest.fn();

    const mockProps = {
      item: {
        imageUrl: imageUrl,
        price: mockPrice,
        name: mockName
      },
      addItem: mockAddItem
    };

    wrapper = shallow(<CollectionItem {...mockProps}/>);
  });

  it('should render CollectionItem component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call addItem when AddButton is called', () => {
    wrapper.find("[id='additem']").simulate('click');
    expect(mockAddItem).toHaveBeenCalled();
  });

  it('should render imageUrl as a prop on BackgroundImage', () => {
    expect(wrapper.find("[id='bgimage']").prop('imageUrl')).toBe(imageUrl);
  });

  it('should render name prop in NameContainer', () => {
    expect(wrapper.find("[id='name']").text()).toBe(mockName);
  });

  it('should render price in PriceContainer', () => {
    const price = parseInt(wrapper.find("[id='price']").text());
    expect(price).toBe(mockPrice);
  });
});