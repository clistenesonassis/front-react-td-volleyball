import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducer';

// Devtools.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Middleware
const middleware: any[] = [];

// Store
const storeDev = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);

export default storeDev;
