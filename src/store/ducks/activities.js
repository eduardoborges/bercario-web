import Immutable from 'seamless-immutable';

export const Types = {
  GET_REQUEST: 'activities/GET_REQUEST',
  GET_SUCCESS: 'activities/GET_SUCCESS',
};

const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
});

export default function activities(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };

    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };

    default:
      return state;
  }
}

export const Creators = {
  getActivitiesRequest: () => ({ type: Types.GET_REQUEST }),
  getActivitiesSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
