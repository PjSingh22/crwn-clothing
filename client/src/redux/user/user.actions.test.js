import UserActionTypes from './user.types';
import { googleSignInStart, signInSuccess, signInFailure, emailSignInStart, checkUserSession, signOutStart, signOutSuccess, signOutFailure, signUpStart, signUpSuccess, signUpFailure } from './user.actions'; 

describe('googleSignInStart action', () => {
  it('should create the googleSignInStart action', () => {
    expect(googleSignInStart().type).toEqual(UserActionTypes.GOOGLE_SIGN_IN_START);
  });
});

describe('signInSuccess action', () => {
  const mockUser = {
    id: 1,
    name: 'john',
    email: 'john@gmail.com'
  }

  const action = signInSuccess(mockUser)
  it('should create the signInSuccess action', () => {
    expect(action.type).toEqual(UserActionTypes.SIGN_IN_SUCCESS);
    expect(action.payload).toEqual(mockUser);
  });
});

describe('signInFailure action', () => {
  const action = signInFailure('error');
  it('should create signInFailure action', () => {
    expect(action.type).toEqual(UserActionTypes.SIGN_IN_FAILURE);
    expect(action.payload).toEqual('error');
  });
});

describe('emailSignInStart action', () => {
  const newMockUser = {
    id: 1,
    name: 'john',
    email: 'john@gmail.com',
    password: '1234'
  }

  const action = emailSignInStart(newMockUser);
  it('should create the emailSignInStart action', () => {
    expect(action.type).toEqual(UserActionTypes.EMAIL_SIGN_IN_START);
    expect(action.payload).toEqual(newMockUser);
  });
});

describe('checking action types of checkUserSession, signOutStart, and signOutSuccess', () => {
  it('should create checkUserSession', () => {
    expect(checkUserSession().type).toEqual(UserActionTypes.CHECK_USER_SESSION);
  });

  it('should create signOutStart action', () => {
    expect(signOutStart().type).toEqual(UserActionTypes.SIGN_OUT_START);
  }); 

  it('should create signOutSuccess action', () => {
    expect(signOutSuccess().type).toEqual(UserActionTypes.SIGN_OUT_SUCCESS);
  });
});

describe('signOutFailure action', () => {
  const action = signOutFailure('error');
  it('should create signOutFailure action', () => {
    expect(action.type).toEqual(UserActionTypes.SIGN_OUT_FAILURE);
    expect(action.payload).toEqual('error');
  });
})