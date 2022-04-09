import { createStore, compose, applyMiddleware, Middleware } from 'redux';
import rootReducer from './reducer';

// Devtools.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Middleware
const middleware: Middleware[] = [];

// Store
const storeDev = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);

export default storeDev;
