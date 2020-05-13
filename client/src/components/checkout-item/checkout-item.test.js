import React from 'react';
import { shallow } from 'enzyme';

import { CheckoutItem } from './checkout-item.component';

describe('CheckoutItem rendering', () => {
  let wrapper;
  let mockClearItem;
  let mockAddItem;
  let mockRemoveItem;

  beforeEach(() => {
    mockAddItem = jest.fn();
    mockClearItem = jest.fn();
    mockRemoveItem = jest.fn();

    const mockProps = {
      cartItem: {
        imageUrl: 'www.imagestuff.com',
        price: 10,
        name: 'hats',
        quantity: 2
      },
      clearItem: mockClearItem,
      addItem: mockAddItem,
      removeItem: mockRemoveItem
    };

    wrapper = shallow(<CheckoutItem {...mockProps}/>);
  });

  it('should render CheckoutItem component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should clear cartItem when remove button is clicked', () => {
    wrapper.find("[className='clear-button']").simulate('click');
    expect(mockClearItem).toHaveBeenCalled();
  });

  it('should add cartItem when additem is clicked', () => {
    wrapper.find("[id='additem']").simulate('click');
    expect(mockAddItem).toHaveBeenCalled();
  });

  it('should remove cartItem when removeitem is clicked', () => {
    wrapper.find("[id='removeitem']").simulate('click');
    expect(mockRemoveItem).toHaveBeenCalled();
  });
});