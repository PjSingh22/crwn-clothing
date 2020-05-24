import React from 'react';
import { shallow } from 'enzyme';

import WithSpinner from './with-spinner.component';
import Spinner from '../spinner/spinner.component';

describe('WithSpinner component', () => {
 const TestComponent = () => <div className='test' />
 const WrappedComponent = WithSpinner(TestComponent);

 describe('If loading is true', () => {
  const wrapper = shallow(<WrappedComponent isLoading={true} />);
  it('should render Spinner component', () => {
    expect(wrapper.exists(Spinner)).toBe(true);
  });

  it('should not render component', () => {
    expect(wrapper.exists(TestComponent)).toBe(false);
  });
 });

 describe('If loading is false', () => {
  const wrapper = shallow(<WrappedComponent isLoading={false} />);
   it('should render component', () => {
    expect(wrapper.exists(TestComponent)).toBe(true);
   });

   it('should not render Spinner', () => {
    expect(wrapper.exists(Spinner)).toBe(false);
   });
 });
});