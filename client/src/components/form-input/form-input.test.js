import React from 'react';
import { shallow } from 'enzyme';

import FormInput from './form-input.component';

let wrapper;
let mockHandleChange;

describe('FormInput component', ()=> {
  beforeEach(() => {
    mockHandleChange = jest.fn();
  
    const mockProps = {
      label: 'hats',
      handleChange: mockHandleChange,
      value: 'test@gmail.com'
    };
  
    wrapper = shallow(<FormInput {...mockProps}/>);
  });
  
  it('should render FormInput component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleChange when input changes', () => {
    wrapper.find("[className='form-input']").simulate('change');
    expect(mockHandleChange).toHaveBeenCalled();
  });

  it('should render forms label if there is no label', () => {
    expect(wrapper.exists('label')).toBe(true);
  });

  it('should not render form label if there is no label', () => {
    const mockProps2 = {
      label: '',
      value: 'test@gmail.com',
      handleChange: mockHandleChange
    };
    const newWrapper = shallow(<FormInput {...mockProps2}/>);
    expect(newWrapper.exists('label')).toBe(false);
  });
});
