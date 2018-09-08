import { Map } from 'immutable';
import { MAX_MESSAGE_LENGTH } from '../constants';
import { createSelector } from 'reselect';
import { types as messagesTypes } from './messages';
import { types as authTypes } from './auth';
import { types as messageTypes } from './message';

// Types

export const types = {
  SET_PARENT_ID: 'inputArea/SET_PARENT_ID',
  SET_STATUS: 'inputArea/SET_STATUS',
  SET_TEXT: 'inputArea/SET_TEXT',
};

// Reducer

export const INITIAL_STATE = Map({
  messageId: null,
  parentId: null,
  text: '',
  status: 'initial',
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch(action.type) {
    case messageTypes.CLICKED_RESPOND:
      return state.merge({
        messageId: null,
        parentId: action.payload.message.id,
        text: '',
        status: 'new',
      });
    case types.SET_PARENT_ID:
      return state.set('parentId', action.payload.parentId);
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
    case authTypes.SET_CURRENT_USER_ID:
      return INITIAL_STATE;
    default: return state;
  }
}

// Action creators

const setParentId = parentId => ({
  type: types.SET_PARENT_ID,
  payload: { parentId }
});

const setStatus = status => ({
  type: types.SET_STATUS,
  payload: { status }
});

const setText = text => ({
  type: types.SET_TEXT,
  payload: { text }
});

export const actions = {
  setParentId,
  setStatus,
  setText,
};

// Selectors

const getMessageId = state => state.get('messageId');
const getParentId = state => state.get('parentId');
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
  getMessageId,
  getParentId,
  getStatus,
  getText,
  getRemainingCharactersCount,
  getCharactersCountLabel,
};
