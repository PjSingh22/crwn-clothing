import directoryReducer, { INITIAL_STATE } from './directory.reducer';

describe('directoryReducer', () => {
  it('should return intitial state', () => {
    expect(directoryReducer(undefined, {})).toEqual(INITIAL_STATE);
  });
});