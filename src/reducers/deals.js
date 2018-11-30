import {
  REQ_GET_DEALS_SUCCESS,
  REQ_GET_PARTNERS_SUCCESS,
  REQ_GET_DEST_SUCCESS,
  REQ_GET_DEAL_SUCCESS,
} from '@/viewmodels/actionTypes';

export const initialState = {
  partners: {},
  destinations: [],
  deal: {},
};


export default function (state = initialState, action) {
  switch (action.type) {
    case REQ_GET_DEALS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case REQ_GET_PARTNERS_SUCCESS:
      return {
        ...state,
        partners: {
          ...state.partners,
          ...action.payload,
        },
      };
    case REQ_GET_DEST_SUCCESS:
      return {
        ...state,
        destinations: [
          ...state.destinations,
          ...action.payload,
        ],
      };
    case REQ_GET_DEAL_SUCCESS:
      return {
        ...state,
        deal: {
          ...state.deal,
          ...action.payload,
        },
      };
    default:
      return state;
  }
}
