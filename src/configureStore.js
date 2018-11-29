import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import logger from 'redux-logger';

import reducer from '@/reducers';
import apiErrorMessage from '@/middlewares/apiErrorMessage';


const middlewares = [thunk, apiMiddleware, apiErrorMessage];
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

export default preloadedState => createStore(
  reducer,
  preloadedState,
  applyMiddleware(...middlewares),
);
