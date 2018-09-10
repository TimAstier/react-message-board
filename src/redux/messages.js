import { List } from 'immutable';
import { createSelector } from 'reselect';
import { Message } from '../models';
import messagesToThreads from '../utils/messagesToThreads';

// Types

export const types = {
  FETCH: 'messages/FETCH',
  FETCH_SUCCEEDED: 'messages/FETCH_SUCCEEDED',
  FETCH_FAILED: 'messages/FETCH_FAILED',
  CREATE: 'messages/CREATE',
  CREATE_SUCCEEDED: 'messages/CREATE_SUCCEEDED',
  CREATE_FAILED: 'messages/CREATE_FAILED',
  DELETE: 'messages/DELETE',
  DELETE_SUCCEEDED: 'messages/DELETE_SUCCEEDED',
  DELETE_FAILED: 'messages/DELETE_FAILED',
  UPDATE: 'messages/UPDATE',
  UPDATE_SUCCEEDED: 'messages/UPDATE_SUCCEEDED',
  UPDATE_FAILED: 'messages/UPDATE_FAILED',
};

// Reducer

export const INITIAL_STATE = List();

const reduceDelete = (state, action) => {
  const index = state.findIndex(m => m.id === action.payload.id);
  if (index !== -1) {
    return state.update(index, m => m.set('deleting', true));
  }
  return state;
};

const reduceCreateSucceeded = (state, action) => {
  return state.push(new Message(action.payload.message));
};

const reduceDeleteSucceeded = (state, action) => {
  const index = state.findIndex(m => m.id === action.payload.id);
  return index !== -1 ? state.delete(index) : state;
};

const reduceUpdateSucceeded = (state, action) => {
  const { message } = action.payload;
  const index = state.findIndex(m => m.id === message.id);
  if (index !== -1) {
    return state.update(index, m => m.set('text', message.text));
  }
  return state;
};

const reduceFetchSucceeded = (state, action) => {
  return List(action.payload.data.map(m => new Message(m)));
};

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.CREATE_SUCCEEDED: return reduceCreateSucceeded(state, action);
    case types.UPDATE_SUCCEEDED: return reduceUpdateSucceeded(state, action);
    case types.DELETE: return reduceDelete(state, action);
    case types.DELETE_SUCCEEDED: return reduceDeleteSucceeded(state, action);
    case types.FETCH_SUCCEEDED: return reduceFetchSucceeded(state, action);
    default: return state;
  }
}

// Action creators

const fetch = () => ({
  type: types.FETCH,
});

const fetchSucceeded = data => ({
  type: types.FETCH_SUCCEEDED,
  payload: { data },
});

const fetchFailed = error => ({
  type: types.FETCH_FAILED,
  payload: { error },
});

const myDelete = id => ({
  type: types.DELETE,
  payload: { id },
});

const deleteSucceeded = id => ({
  type: types.DELETE_SUCCEEDED,
  payload: { id },
});

const deleteFailed = error => ({
  type: types.DELETE_FAILED,
  payload: { error },
});

const create = ({text, parentId, author}) => ({
  type: types.CREATE,
  payload: {
    text,
    author,
    parentId,
  },
});

const createSucceeded = message => ({
  type: types.CREATE_SUCCEEDED,
  payload: { message },
});

const createFailed = error => ({
  type: types.CREATE_FAILED,
  payload: { error },
});

// It should be possible to update with only the id and the text
// But json-server merge updates by dropping missing keys
const update = ({id, text, author, parentId}) => ({
  type: types.UPDATE,
  payload: {
    id,
    text,
    author,
    parentId,
  },
});

const updateSucceeded = message => ({
  type: types.UPDATE_SUCCEEDED,
  payload: { message },
});

const updateFailed = error => ({
  type: types.UPDATE_FAILED,
  payload: { error },
});

export const actions = {
  fetch,
  fetchSucceeded,
  fetchFailed,
  create,
  createSucceeded,
  createFailed,
  delete: myDelete,
  deleteSucceeded,
  deleteFailed,
  update,
  updateSucceeded,
  updateFailed,
};

// Selectors

const getMessages = state => state;

const getThreads = createSelector(
  getMessages,
  messages => messagesToThreads(messages)
);

export const selectors = {
  getMessages,
  getThreads,
};
