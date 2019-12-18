import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import {
  CartDropDown,
  CartItems,
  EmptyMessage,
  CheckoutButton
} from './cart-dropdown.styles';


const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropDown>
    <CartItems>
      {
        cartItems.length ? 
        (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />))
        :
        <EmptyMessage>Your cart is empty</EmptyMessage>
      }
    </CartItems>
    <CheckoutButton onClick={() => {
      history.push('/checkout'); 
      dispatch(toggleCartHidden());
      }}>
      GO TO CHECKOUT
    </CheckoutButton>
  </CartDropDown>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));