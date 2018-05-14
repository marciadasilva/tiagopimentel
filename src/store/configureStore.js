import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';
import imagesReducer from '../reducers/images';
import videosReducer from '../reducers/videos';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      filters: filtersReducer,
      images: imagesReducer,
      videos: videosReducer,
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
