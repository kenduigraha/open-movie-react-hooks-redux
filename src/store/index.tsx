import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

// eslint-disable-next-line
const store: Store<any, any> & {
  // eslint-disable-next-line
  dispatch: any;
} = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
