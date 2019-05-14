import { all, takeLatest } from 'redux-saga/effects';

import { Types as ActivitiesTypes } from '../ducks/activities';
import { getActivities } from './activities';

export default function* rootSaga() {
  yield all([takeLatest(ActivitiesTypes.GET_REQUEST, getActivities)]);
}
