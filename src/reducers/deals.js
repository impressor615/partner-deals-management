import {
  REQ_GET_DEALS_SUCCESS,
  REQ_GET_PARTNERS_SUCCESS,
  REQ_GET_DEST_SUCCESS,
  REQ_GET_DEAL_SUCCESS,
} from '@/viewmodels/actionTypes';

// TODO: api 작동하지 않아 mockData로 진행
export const initialState = {
  partners: [
    {
      id: 3,
      code: 'TW',
      name: '티웨이 항공',
    },
    {
      id: 15,
      code: 'AA',
      name: '아메리칸 항공',
    },
  ],
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
