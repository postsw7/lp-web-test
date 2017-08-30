import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from 'actions/actionCreators';
import * as types from 'actions/actionTypes';
import axios from 'axios';
import moxios from 'moxios';
import { initialState } from 'reducers';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const API_SERVER = 'http://api.dev.lookpin.co.kr';

describe('actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should create an action to increase number', () => {
    const expectedAction = {
      type: types.CREATE_NEW_PAGE,
    };
    expect(actions.createNewPage()).toEqual(expectedAction);
  });

  it('should create GET_STORE_LIST_SUCCESS when requesting stores has been done', () => {
    moxios.stubRequest(API_SERVER + '/stores/brands', {
      status: 200,
      response: [{ brands: 'brand' }],
    });

    const expectedAction = [
      { type: types.REQUEST_STORE_LIST },
      { type: types.GET_STORE_LIST_SUCCESS, data: [{ brands: 'brand' }] },
    ];
    const store = mockStore(initialState);

    return store.dispatch(actions.getStoreList()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
