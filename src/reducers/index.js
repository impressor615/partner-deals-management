import { combineReducers } from 'redux';
import user, { initialState as userState } from './user';
import commonUI, { initialState as commonUIState } from './commonUI';
import deals, { initialState as dealsState } from './deals';
import partnerDeals, { initialState as partnerDealsState } from './partnerDeals';

export default combineReducers({
  user,
  commonUI,
  deals,
  partnerDeals,
});

export const initialState = {
  user: userState,
  commonUI: commonUIState,
  deals: dealsState,
  partnerDeals: partnerDealsState,
};
