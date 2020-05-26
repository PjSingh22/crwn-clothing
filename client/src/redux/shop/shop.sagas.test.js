import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';
import{ firestore, convertCollectionsSnapshotToMap } from '../../fire-base/firebase.utils';
import { fetchCollectionsStart, fetchCollectionsAsynch } from './shop.sagas';
import ShopActionTypes from './shop.types';

describe('fethc collections start saga', () => {
  const generator = fetchCollectionsStart();
  it('should trigger on FETCH_COLLECTIONS_START', () => {
    expect(generator.next().value).toEqual(takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsynch));
  });
});

describe('fetch collections async saga', () => {
  const generator = fetchCollectionsAsynch();

  it('should call firestore collection', () => {
    const getCollection = jest.spyOn(firestore, 'collection')
    generator.next();
    expect(getCollection).toHaveBeenCalled();
  });

  it('should call convertCollectionsSnapshot saga', () => {
    const mockSnapshot = {};
    expect(generator.next(mockSnapshot).value).toEqual(call(convertCollectionsSnapshotToMap, mockSnapshot));
  });

  it('should fire fetchCollectionsSuccess is collectionsMap is succesful', () => {
    const mockCollectionsMap = {
      hats: { id: 1 }
    };

    expect(generator.next(mockCollectionsMap).value).toEqual(put(fetchCollectionsSuccess(mockCollectionsMap)));
  });

  it('should fire fetchCollectionsFailure if get collections fails at any point', () => {
    const newGenerator = fetchCollectionsAsynch();
    newGenerator.next();
    expect(newGenerator.throw({ message: 'error' }).value).toEqual(put(fetchCollectionsFailure('error')));
  });
});

