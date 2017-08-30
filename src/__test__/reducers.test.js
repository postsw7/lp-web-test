import reducers from 'reducers';
import * as types from 'actions/actionTypes';
import { initialState } from 'reducers';

describe('reducers test', () => {
  it('should return the inital state', () => {
    expect(reducers(undefined, {})).toEqual(initialState);
  });

  it('should handle pages', () => {
    expect(
      reducers(undefined, {
        type: types.CREATE_NEW_PAGE,
      })
    ).toEqual({
      ...initialState,
      pages: {
        number: 2,
      },
    });
  });
});
