import * as types from './actionTypes';
import axios from 'axios';

axios.defaults.baseURL = 'http://api.dev.lookpin.co.kr';
axios.defaults.headers.common['Authorization'] =
  'Token token=0569fbc99d5be31ab04b0de8e557b3b8';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const createNewPage = () => ({
  type: types.CREATE_NEW_PAGE,
});

export const requestStoreList = () => ({
  type: types.REQUEST_STORE_LIST,
});

export const getStoreListSuccess = stores => ({
  type: types.GET_STORE_LIST_SUCCESS,
  data: stores,
});

export const getStoreListFail = () => ({
  type: types.GET_STORE_LIST_FAIL,
});

export const getStoreList = () => {
  return dispatch => {
    dispatch(requestStoreList());
    return axios
      .get('/stores/brands')
      .then(res => {
        dispatch(getStoreListSuccess(res.data));
      })
      .catch(err => {
        console.error(err.message);
        dispatch(getStoreListFail());
      });
  };
};
