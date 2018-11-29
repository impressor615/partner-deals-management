import { combineReducers } from 'redux';
import user, { initialState as userState } from './user';

export default combineReducers({
  user,
});

export const initialState = {
  user: userState,
};
