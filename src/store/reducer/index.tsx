import { combineReducers } from 'redux';
import { omdbReducer } from './omdbReducer';
import { omdbDetailReducer } from './omdbDetailReducer';

const rootReducer = combineReducers({
  omdbReducer,
  omdbDetailReducer,
});

export default rootReducer;
