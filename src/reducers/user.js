import {
  REQ_POST_USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from '@/viewmodels/actionTypes';

export const initialState = {
  access_token: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REQ_POST_USER_LOGIN_SUCCESS:
      return {
        ...state,
        access_token: action.payload.access_token,
      };
    case USER_LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
