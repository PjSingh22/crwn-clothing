import ShopActionTypes from './shop.types';

import {
  fetchCollectionsStart,
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
  fetchCollectionsStartAsync
} from './shop.actions';

describe('fetchCollectionStart action', () => {
  it('should create the fetchCollectionStart action', () => {
    expect(fetchCollectionsStart().type).toEqual(ShopActionTypes.FETCH_COLLECTIONS_START);
  });
});

describe('fetchCollectionsSuccess action', () => {
  it('should create the fetchCollectionsSuccess action', () => {
    const mockCollectionsMap = {
      hats: {
        id: 1
      }
    };
    const action = fetchCollectionsSuccess(mockCollectionsMap);
    expect(action.type).toEqual(ShopActionTypes.FETCH_COLLECTIONS_SUCCESS);
    expect(action.payload).toEqual(mockCollectionsMap);
  });
});

describe('fetchCollectionsFailure action', () => {
  it('should create the fetchCollectionsFailure action', () => {
    const action = fetchCollectionsFailure('error');

    expect(action.type).toEqual(ShopActionTypes.FETCH_COLLECTIONS_FAILURE);
    expect(action.payload).toEqual('error');
  });
});

describe('fetchCollectionsStartAsync', () => {
  it('should create the fetchCollectionsStartAsync action', () => {
    const mockActionCreator = fetchCollectionsStartAsync();
    const mockDispatch = jest.fn();
    mockActionCreator(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(fetchCollectionsStart());
  });
});