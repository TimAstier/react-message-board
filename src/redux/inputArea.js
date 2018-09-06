import { Map } from 'immutable';
import { MAX_MESSAGE_LENGTH } from '../constants';
import { createSelector } from 'reselect';
import { types as messagesTypes } from './messages';

// Types

export const types = {
  SET_STATUS: 'userInput/SET_STATUS',
  SET_TEXT: 'userInput/SET_TEXT',
};

// Reducer

export const INITIAL_STATE = Map({
  text: '',
  status: 'initial',
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch(action.type) {
    case types.SET_STATUS:
      return state.set('status', action.payload.status);
    case types.SET_TEXT:
      if (action.payload.text.length <= MAX_MESSAGE_LENGTH) {
        return state.set('text', action.payload.text);
      }
      return state;
    case messagesTypes.SAVE:
      return state.set('status', 'saving');
    case messagesTypes.SAVE_SUCCEEDED:
      return state.merge({status: 'initial', text: ''});
    default: return state;
  }
}

// Action creators

const setStatus = status => ({
  type: types.SET_STATUS,
  payload: { status }
});

const setText = text => ({
  type: types.SET_TEXT,
  payload: { text }
});

export const actions = {
  setStatus,
  setText,
};

// Selectors

const getStatus = state => state.get('status');
const getText = state => state.get('text');

const getRemainingCharactersCount = createSelector(
  getText,
  text => MAX_MESSAGE_LENGTH - text.length
);

const getCharactersCountLabel = createSelector(
  getRemainingCharactersCount,
  count => `${MAX_MESSAGE_LENGTH - count} / ${MAX_MESSAGE_LENGTH}`
);

export const selectors = {
  getStatus,
  getText,
  getRemainingCharactersCount,
  getCharactersCountLabel,
};
