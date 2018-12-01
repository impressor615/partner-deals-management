import {
  REQ_GET_PARTNER_DEALS_SUCCESS,
  REQ_GET_PARTNER_DEAL_DAILY_DATA_SUCCESS,
} from '@/viewmodels/actionTypes';

// TODO: api가 작동하지 않아 mockData로 진행
export const initialState = {
  daily_data: [
    {
      title: '메가 얼리버드 특가',
      totalSiteCount: 70000,
    },
    {
      title: '렉프라이데이특가',
      totalSiteCount: 60000,
    },
    {
      title: '홍콩+오션특가',
      totalSiteCount: 15000,
    },
    {
      title: '메가 얼리버드 특가',
      totalSiteCount: 70000,
    },
    {
      title: '렉프라이데이특가',
      totalSiteCount: 60000,
    },
    {
      title: '홍콩+오션특가',
      totalSiteCount: 15000,
    },
    {
      title: '메가 얼리버드 특가',
      totalSiteCount: 70000,
    },
    {
      title: '렉프라이데이특가',
      totalSiteCount: 60000,
    },
    {
      title: '홍콩+오션특가',
      totalSiteCount: 15000,
    },
    {
      title: '메가 얼리버드 특가',
      totalSiteCount: 70000,
    },
    {
      title: '렉프라이데이특가',
      totalSiteCount: 60000,
    },
    {
      title: '홍콩+오션특가',
      totalSiteCount: 15000,
    },
  ],
  deals: [
    {
      id: 1,
      title: '진에어 슬림한진 특가',
      startDate: '2017-11-23',
      endDate: '2017-12-06',
      totalItemViewCount: 154301,
      totalViewCount: 654311,
      totalSiteCount: 54300,
    },
    {
      id: 2,
      title: '진에어 슬림한진 특가',
      startDate: '2017-11-23',
      endDate: '2017-12-06',
      totalItemViewCount: 154301,
      totalViewCount: 654311,
      totalSiteCount: 54300,
    },
    {
      id: 3,
      title: '진에어 슬림한진 특가',
      startDate: '2017-11-23',
      endDate: '2017-12-06',
      totalItemViewCount: 154301,
      totalViewCount: 654311,
      totalSiteCount: 54300,
    },
    {
      id: 4,
      title: '진에어 슬림한진 특가',
      startDate: '2017-11-23',
      endDate: '2017-12-06',
      totalItemViewCount: 154301,
      totalViewCount: 654311,
      totalSiteCount: 54300,
    },
  ],
};


export default function (state = initialState, action) {
  switch (action.type) {
    case REQ_GET_PARTNER_DEALS_SUCCESS:
      return {
        ...state,
        deals: {
          ...state.deals,
          ...action.payload,
        },
      };
    case REQ_GET_PARTNER_DEAL_DAILY_DATA_SUCCESS:
      return {
        ...state,
        daily_data: {
          ...state.deals,
          ...action.payload,
        },
      };
    default:
      return state;
  }
}
