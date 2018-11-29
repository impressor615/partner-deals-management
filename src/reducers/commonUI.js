import {
  CLEAR_ERROR,
} from '@/viewmodels/actionTypes';

export const initialState = {
  loading: false,
  error: '',
};

export default function (state = initialState, action) {
  if (/^REQ[_A-Z]+[^SUCCESS|FAILURE]$/.test(action.type)) {
    return {
      ...state,
      loading: true,
    };
  }

  if (/^REQ[_A-Z]+_SUCCESS$/.test(action.type)) {
    return {
      ...state,
      loading: false,
    };
  }

  if (/^REQ[_A-Z]+_FAILURE$/.test(action.type)) {
    return {
      ...state,
      loading: false,
      error: action.payload.message,
    };
  }

  switch (action.type) {
    case CLEAR_ERROR:
      return {
        ...state,
        error: '',
      };
    default:
      return state;
  }
}
