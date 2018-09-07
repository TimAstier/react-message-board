import { Map } from 'immutable';

// Types

export const types = {
  SET_CURRENT_USER_ID: 'login/SET_CURRENT_USER_ID'
};

// Reducer

export const INITIAL_STATE = Map({
  currentUserId: null
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch(action.type) {
    case types.SET_CURRENT_USER_ID:
      return state.set('currentUserId', action.payload.id);
    default: return state;
  }
}

// Action creators

const setCurrentUserId = id => ({
  type: types.SET_CURRENT_USER_ID,
  payload: { id }
});

export const actions = {
  setCurrentUserId
};

// Selectors

const getCurrentUserId = state => state.get('currentUserId');

export const selectors = {
  getCurrentUserId,
};
