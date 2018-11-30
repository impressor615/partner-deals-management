import {
  REQ_GET_DEALS_SUCCESS,
} from '@/viewmodels/actionTypes';

export const initialState = {};


export default function (state = initialState, action) {
  switch (action.type) {
    case REQ_GET_DEALS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
