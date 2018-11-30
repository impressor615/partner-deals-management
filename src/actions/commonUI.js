import {
  CLEAR_ERROR,
  SET_LOADING,
} from '@/viewmodels/actionTypes';

export const clearError = () => ({
  type: CLEAR_ERROR,
});

export const setLoading = loading => ({
  type: SET_LOADING,
  loading,
});

export default {};
