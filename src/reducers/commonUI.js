import {
  CLEAR_ERROR,
} from '@/viewmodels/actionTypes';

export const initialState = {
  loading: false,
  error: '',
};

export default function (state = initialState, action) {
  const isRequest = action.type.includes('REQ');
  const success = action.type.includes('SUCCESS');
  const failure = action.type.includes('FAILURE');
  if (isRequest && !success && !failure) {
    return {
      ...state,
      loading: true,
    };
  }

  if (isRequest && success) {
    return {
      ...state,
      loading: false,
    };
  }

  if (isRequest && failure) {
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
