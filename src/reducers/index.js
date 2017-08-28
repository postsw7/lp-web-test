import * as types from 'actions/actionTypes';
import { combineReducers } from 'redux';

const initialState = {
  pages: {
    number: 1,
  },
  stores: {
    brands: [],
    status: '',
  },
};

const pages = (state = initialState.pages, action) => {
  switch (action.type) {
    case types.CREATE_NEW_PAGE:
      return Object.assign({}, state, {
        number: state.number + 1,
      });
    default:
      return Object.assign({}, state);
  }
};

const stores = (state = initialState.stores, action) => {
  switch (action.type) {
    case types.REQUEST_STORE_LIST:
      return Object.assign({}, state, {
        status: 'is loading...',
      });
    case types.GET_STORE_LIST_FAIL:
      return Object.assign({}, state, {
        status: 'fail to load brands',
      });
    case types.GET_STORE_LIST_SUCCESS:
      return Object.assign({}, state, {
        brands: action.data,
      });
    default:
      return state;
  }
};

export default combineReducers({
  pages,
  stores,
});
