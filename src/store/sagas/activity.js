import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

/**
|--------------------------------------------------
|  Importando as Action Creators do Duck de Playlist
|--------------------------------------------------
*/
import { Creators as ActivityActions } from '../ducks/activity';
import { Creators as ErrorActions } from '../ducks/error';

export function* createActivity(action) {
  try {
    const response = yield call(api.post, '/activities', action.payload.data);
    yield put(ActivityActions.createActivitySuccess(response.data));
  } catch (error) {
    yield put(ErrorActions.setError('Não foi possível cadastrar'));
  }
}

export function* getActivity(action) {
  try {
    const response = yield call(api.get, `/activities/${action.payload.id}`);
    console.tron.log(response.data);
    yield put(ActivityActions.getActivitySuccess(response.data));
  } catch (error) {
    yield put(ErrorActions.setError('Não foi possível obter os detalhes da Atividade'));
  }
}
