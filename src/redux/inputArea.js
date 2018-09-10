import { Map } from 'immutable';
import { createSelector } from 'reselect';
import { MAX_MESSAGE_LENGTH } from '../constants';
import { types as messagesTypes } from './messages';
import { types as authTypes } from './auth';

// Types

export const types = {
  CLICKED_CANCEL: 'inputArea/CLICKED_CANCEL',
  CLICKED_EDIT: 'inputArea/CLICKED_EDIT',
  CLICKED_NEW: 'inputArea/CLICKED_NEW',
  CLICKED_RESPOND: 'inputArea/CLICKED_RESPOND',
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
  switch (action.type) {
    case types.CLICKED_NEW: return INITIAL_STATE.set('status', 'new');
    case types.CLICKED_RESPOND:
      return INITIAL_STATE.merge({
        parentId: action.payload.message.id,
        status: 'new',
      });
    case types.CLICKED_EDIT:
      return INITIAL_STATE.merge({
        messageId: action.payload.message.id,
        text: action.payload.message.text,
        status: 'edit',
      });
    case types.SET_TEXT:
      if (action.payload.text.length <= MAX_MESSAGE_LENGTH) {
        return state.set('text', action.payload.text);
      }
      return state;
    case messagesTypes.CREATE:
    case messagesTypes.UPDATE:
      return state.set('status', 'saving');
    case messagesTypes.CREATE_SUCCEEDED:
    case messagesTypes.UPDATE_SUCCEEDED:
      return state.merge({status: 'initial', text: ''});
    case types.CLICKED_CANCEL:
    case authTypes.SET_CURRENT_USER_ID: return INITIAL_STATE;
    default: return state;
  }
}

// Action creators

const clickedCancel = () => ({
  type: types.CLICKED_CANCEL,
});

const clickedEdit = message => ({
  type: types.CLICKED_EDIT,
  payload: { message },
});

const clickedNew = () => ({
  type: types.CLICKED_NEW,
});

const clickedRespond = message => ({
  type: types.CLICKED_RESPOND,
  payload: { message },
});

const setText = text => ({
  type: types.SET_TEXT,
  payload: { text },
});

export const actions = {
  clickedCancel,
  clickedEdit,
  clickedNew,
  clickedRespond,
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
