import { combineReducers } from 'redux';
import user from './user';
import client from './client';

const reducers = combineReducers({
  user,
  client
});

export default reducers;
