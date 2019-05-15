import { all, takeLatest } from 'redux-saga/effects';

import { Types as ActivitiesTypes } from '../ducks/activities';
import { Types as ActivityTypes } from '../ducks/activity';

import { getActivities } from './activities';
import { createActivity, getActivity } from './activity';

export default function* rootSaga() {
  yield all([
    takeLatest(ActivitiesTypes.GET_REQUEST, getActivities),
    takeLatest(ActivityTypes.CREATE_ACTIVITY, createActivity),
    takeLatest(ActivityTypes.GET_ACTIVITY, getActivity),
  ]);
}
