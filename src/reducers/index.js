import * as types from 'actions/actionTypes';
import { combineReducers } from 'redux';

const initialState = {
  pages: {
    number: 1,
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

export default combineReducers({
  pages,
});
