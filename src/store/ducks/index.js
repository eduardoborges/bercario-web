import { combineReducers } from 'redux';

import activities from './activities';

const reducers = combineReducers({
  // Remova essa linha depois de adicionar seus ducks
  activities,
});

export default reducers;
