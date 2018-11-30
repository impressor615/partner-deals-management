import {
  CLEAR_ERROR,
  SET_LOADING,
} from '@/viewmodels/actionTypes';

export const initialState = {
  loading: false,
  error: '',
};

export default function (state = initialState, action) {
  if (action.type.includes('REQ') && action.type.includes('FAILURE')) {
    return {
      ...state,
      error: action.payload.message,
    };
  }

  switch (action.type) {
    case CLEAR_ERROR:
      return {
        ...state,
        error: '',
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
}
