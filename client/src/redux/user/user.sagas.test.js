import { takeLatest, put, call } from 'redux-saga/effects';

import UserActionTypes from './user.types';

import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure
} from './user.actions';

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser
} from '../../fire-base/firebase.utils';

import {
  getSnapshotFromUserAuth,
  signInWithGoogle,
  signInWithEmail,
  isUserAuthenticated,
  signOut,
  signUp,
  signInAfterSignUp,
  onGoogleSignInStart,
  onEmailSignInStart,
  onCheckUserSession,
  onSignOutStart,
  onSignUpStart,
  onSignUpSuccess
} from './user.sagas';

describe('on signup start saga', () => {
  it('should trigger on SIGN_UP_START', () => {
    const generator = onSignUpStart();
    expect(generator.next().value).toEqual(takeLatest(UserActionTypes.SIGN_UP_START, signUp));
  });
});

describe('on sign up success saga', () => {
  it('should trigger on SIGN_UP_SUCCESS', () => {
    const generator = onSignUpSuccess();
    expect(generator.next().value).toEqual(takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp));
  });
});

describe('on signout start saga', () => {
  it('should trigger on SIGN_OUT_START', () => {
    const generator = onSignOutStart();
    expect(generator.next().value).toEqual(takeLatest(UserActionTypes.SIGN_OUT_START, signOut));
  });
});

describe('on check user session saga', () => {
  it('should trigger on CHECK_USER_SESSION', () => {
    const generator = onCheckUserSession();
    expect(generator.next().value).toEqual(takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated));
  });
});

describe('on email sign in start saga', () => {
  it('should trigger on EMAIL_SIGN_IN_START', () => {
    const generator = onEmailSignInStart();
    expect(generator.next().value).toEqual(takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail));
  });
});

describe('on google sign in start saga', () => {
  it('should trigger on GOOGLE_SIGN_IN_START', () => {
    const generator = onGoogleSignInStart();
    expect(generator.next().value).toEqual(takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle));
  });
});

describe('on sign in after sign up', () => {
  it('should fire getSnapshotFromUserAuth', () => {
    const mockUser = {};
    const mockAdditionalData = {};
    const mockAction = {
      payload: {
        user: mockUser,
        additionalData: mockAdditionalData
      }
    };

    const generator = signInAfterSignUp(mockAction);
    expect(generator.next().value).toEqual(getSnapshotFromUserAuth(mockUser, mockAdditionalData));
  });
});

describe('sign up saga', () => {
  const mockEmail = 'ceaser@rome.come'
  const mockPassword = 'irule'
  const mockDisplayName = 'conquerorCeaser'
  const mockAction = {
    payload: {
      displayName: mockDisplayName,
      email: mockEmail,
      password: mockPassword
    }
  }

  const generator = signUp(mockAction);

  it('should fire createUserWithEmailAndPassword', () => {
    const createUserWithEmailAndPassword = jest.spyOn(auth, 'createUserWithEmailAndPassword');
    generator.next();
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });
});

