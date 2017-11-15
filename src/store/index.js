import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import appReducer from '../reducers';

export default function configureStore() {
  return createStore(
    appReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}
