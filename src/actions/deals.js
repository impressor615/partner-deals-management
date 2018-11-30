import CONFIG from '@/config';
import { RSAA } from 'redux-api-middleware';

import {
  REQ_GET_DEALS,
  REQ_GET_DEALS_SUCCESS,
  REQ_GET_DEALS_FAILURE,
  REQ_GET_PARTNERS,
  REQ_GET_PARTNERS_SUCCESS,
  REQ_GET_PARTNERS_FAILURE,
  REQ_GET_DEST,
  REQ_GET_DEST_SUCCESS,
  REQ_GET_DEST_FAILURE,
  REQ_GET_DEAL,
  REQ_GET_DEAL_SUCCESS,
  REQ_GET_DEAL_FAILURE,
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

export const getPartners = ({ token }) => dispatch => (
  dispatch({
    [RSAA]: {
      types: [
        REQ_GET_PARTNERS,
        REQ_GET_PARTNERS_SUCCESS,
        REQ_GET_PARTNERS_FAILURE,
      ],
      method: 'GET',
      endpoint: `${CONFIG.API.base_url}/partners/users`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  })
);

export const getDestinations = ({ token }) => dispatch => (
  dispatch({
    [RSAA]: {
      types: [
        REQ_GET_DEST,
        REQ_GET_DEST_SUCCESS,
        REQ_GET_DEST_FAILURE,
      ],
      method: 'GET',
      endpoint: `${CONFIG.API.base_url}/flight_data/area/list`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  })
);

export const getDeal = ({ token, id }) => dispatch => (
  dispatch({
    [RSAA]: {
      types: [
        REQ_GET_DEAL,
        REQ_GET_DEAL_SUCCESS,
        REQ_GET_DEAL_FAILURE,
      ],
      method: 'GET',
      endpoint: `${CONFIG.API.base_url}/deals/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  })
);
