import Immutable from 'seamless-immutable';

export const Types = {
  CREATE_ACTIVITY: 'activity/CREATE_ACTIVITY',
  CREATE_ACTIVITY_SUCCESS: 'activity/CREATE_ACTIVITY_SUCCESS',
  GET_ACTIVITY: 'activity/GET_ACTIVITY',
  GET_ACTIVITY_SUCCESS: 'activity/GET_ACTIVITY_SUCCESS',
  UPDATE_ACTIVITY: 'activity/CREATE_ACTIVITY',
  UPDATE_ACTIVITY_SUCCESS: 'activity/CREATE_ACTIVITY_SUCCESS',
};

const INITIAL_STATE = Immutable({ data: {}, loading: false });

export default function activity(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_ACTIVITY:
      return { ...state, loading: true };

    case Types.GET_ACTIVITY_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };

    case Types.CREATE_ACTIVITY:
      return { ...state, loading: true };

    case Types.CREATE_ACTIVITY_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };

    case Types.UPDATE_ACTIVITY:
      return { ...state, loading: true };

    case Types.UPDATE_ACTIVITY_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };

    default:
      return state;
  }
}

export const Creators = {
  getActivity: id => ({ type: Types.GET_ACTIVITY, payload: { id } }),
  getActivitySuccess: data => ({
    type: Types.GET_ACTIVITY_SUCCESS,
    payload: { data },
  }),
  createActivity: data => ({ type: Types.CREATE_ACTIVITY, payload: { data } }),
  createActivitySuccess: data => ({
    type: Types.CREATE_ACTIVITY_SUCCESS,
    payload: { data },
  }),
};
