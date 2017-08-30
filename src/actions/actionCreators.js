import * as types from './actionTypes';
import axios from 'axios';

axios.defaults.baseURL = 'http://api.dev.lookpin.co.kr';

const requestGuestToken = () => ({
  type: types.REQUEST_GUEST_TOKEN,
});

const failGuestToken = () => ({
  type: types.FAIL_GUEST_TOKEN,
});

const successGuestToken = guestToken => ({
  type: types.SUCCESS_GUEST_TOKEN,
  data: guestToken,
});

export const getGuestToken = deviceToken => {
  const params = new URLSearchParams();
  params.append('device_token', deviceToken);
  return dispatch => {
    dispatch(requestGuestToken());
    return axios
      .post('/users/auth', params)
      .then(res => {
        dispatch(successGuestToken(res.data));
        window.localStorage.setItem('accessToken', res.data);
      })
      .catch(err => {
        console.error(err.message);
        dispatch(failGuestToken());
      });
  };
};

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
      .get('/stores/brands', {
        headers: {
          authorization: `Token token=${window.localStorage.getItem(
            'accessToken'
          )}`,
        },
      })
      .then(res => {
        dispatch(getStoreListSuccess(res.data));
      })
      .catch(err => {
        console.error(err.message);
        dispatch(getStoreListFail());
      });
  };
};
