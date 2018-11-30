import CONFIG from '@/config';
import { RSAA } from 'redux-api-middleware';

import {
  REQ_GET_DEALS,
  REQ_GET_DEALS_SUCCESS,
  REQ_GET_DEALS_FAILURE,
} from '@/viewmodels/actionTypes';

export const getDeals = ({ token, queryString = '?page=1' }) => dispatch => (
  dispatch({
    [RSAA]: {
      types: [
        REQ_GET_DEALS,
        REQ_GET_DEALS_SUCCESS,
        REQ_GET_DEALS_FAILURE,
      ],
      method: 'GET',
      endpoint: `${CONFIG.API.base_url}/deals${queryString}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  })
);

export default {};
