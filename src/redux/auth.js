import { Map } from 'immutable';
import { createSelector } from 'reselect';

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
const getIsLoggedIn = createSelector(
  getCurrentUserId,
  id => id !== null
);

export const selectors = {
  getCurrentUserId,
  getIsLoggedIn
};
