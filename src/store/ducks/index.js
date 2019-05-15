import { combineReducers } from 'redux';

import activities from './activities';
import activity from './activity';

const reducers = combineReducers({
  // Remova essa linha depois de adicionar seus ducks
  activities,
  activity,
});

export default reducers;
