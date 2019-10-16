import {createStore, applyMiddleware} from 'redux';
import {middlewares} from '../src/redux/store'
import rootReducer from './redux/root-reducer';

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

export const storeFactory = (initialState) => {
  const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddlewares(rootReducer, initialState);
}