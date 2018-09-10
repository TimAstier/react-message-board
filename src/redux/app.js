import { Map } from 'immutable';
import { types as messagesTypes } from './messages';

// Types

export const types = {
  SET_LOADING: 'app/SET_LOADING',
};

// Reducer

export const INITIAL_STATE = Map({
  loading: true,
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET_LOADING:
      return state.set('loading', action.payload.loading);
    case messagesTypes.FETCH_SUCCEEDED:
      return state.set('loading', false);
    default: return state;
  }
}

// Action creators

const setLoading = loading => ({
  type: types.SET_LOADING,
  payload: { loading },
});

export const actions = {
  setLoading,
};

// Selectors

const getLoading = state => state.get('loading');

export const selectors = {
  getLoading,
};
