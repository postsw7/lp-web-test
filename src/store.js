import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducers from 'reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(logger)));

export default store;
