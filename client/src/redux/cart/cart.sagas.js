import { all, call, takeLatest, put, select } from 'redux-saga/effects';

import { getUserCartRef } from '../../fire-base/firebase.utils';
import UserActonTypes from '../user/user.types';
import { selectCurrentUser } from '../user/user.selector';
import { selectCartItems } from '../cart/cart.selectors'
import { clearCart, setCartFromFirebase } from './cart.actions';
import CartActionTypes from './cart.types';

export function* clearCartOnSignOut() {
  yield put(clearCart());
};

export function* updateCartInFirebase() {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const cartRef = yield getUserCartRef(currentUser.id);
      const cartItems = yield select(selectCartItems);
      yield cartRef.update({ cartItems });
    } catch (error) {
      console.log(error)
    }
  }
};

export function* checkCartFromFirebase({ payload: user }) {
  const cartRef = yield getUserCartRef(user.id);
  const cartSnapShot = yield cartRef.get();
  yield put(setCartFromFirebase(cartSnapShot.data().cartItems));
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActonTypes.SIGN_OUT_SUCCESS,clearCartOnSignOut)
};

export function* onUserSignIn() {
  yield takeLatest(UserActonTypes.SIGN_IN_SUCCESS, checkCartFromFirebase);
};

export function* onCartChange() {
  yield takeLatest([
    CartActionTypes.ADD_ITEM,
    CartActionTypes.REMOVE_ITEM,
    CartActionTypes.CLEAR_ITEM_FROM_CART
  ],
    updateCartInFirebase
  );
};

export function* cartSagas() {
  yield all([call(onSignOutSuccess), call(onCartChange), call(onUserSignIn)]);
};