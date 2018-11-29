import CONFIG from '@/config';
import { RSAA } from 'redux-api-middleware';

import {
  REQ_POST_USER_LOGIN,
  REQ_POST_USER_LOGIN_SUCCESS,
  REQ_POST_USER_LOGIN_FAILURE,
  USER_LOGOUT,
} from '@/viewmodels/actionTypes';


export const Login = data => dispatch => (
  dispatch({
    [RSAA]: {
      types: [
        REQ_POST_USER_LOGIN,
        REQ_POST_USER_LOGIN_SUCCESS,
        REQ_POST_USER_LOGIN_FAILURE,
      ],
      method: 'POST',
      endpoint: `${CONFIG.API.base_url}/oauth/token`,
      headers: {
        Authorization: 'Basic Y2xpZW50d2ViOjEyMzQ1Ng==',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data,
    },
  })
);

export const Logout = () => ({ type: USER_LOGOUT });
