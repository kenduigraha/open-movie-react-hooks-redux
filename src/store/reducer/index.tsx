import { combineReducers } from 'redux';
import { omdbReducer } from './omdbReducer';

const rootReducer = combineReducers({
  omdbReducer,
});

export default rootReducer;
