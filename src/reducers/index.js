import { combineReducers } from 'redux';
import user, { initialState as userState } from './user';
import commonUI, { initialState as commonUIState } from './commonUI';

export default combineReducers({
  user,
  commonUI,
});

export const initialState = {
  user: userState,
  commonUI: commonUIState,
};
