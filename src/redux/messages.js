import { List } from 'immutable';
import { createSelector } from 'reselect';
import { Message } from '../models';
import messagesToThreads from '../utils/messagesToThreads';

// Types

export const types = {
  FETCH: 'messages/FETCH',
  FETCH_SUCCEEDED: 'messages/FETCH_SUCCEEDED',
  FETCH_FAILED: 'messages/FETCH_FAILED',
  SAVE: 'messages/SAVE',
  SAVE_SUCCEEDED: 'messages/SAVE_SUCCEEDED',
  SAVE_FAILED: 'messages/SAVE_FAILED',
  DELETE: 'messages/DELETE',
  DELETE_SUCCEEDED: 'messages/DELETE_SUCCEEDED',
  DELETE_FAILED: 'messages/DELETE_FAILED',
};

// Reducer

export const INITIAL_STATE = List();

const reduceDelete = (state, action) => {
  const index = state.findIndex(m => m.id === action.payload.id);
  if (index !== -1) {
    return state.update(index, m => m.set('loading', true));
  }
  return state;
};

const reduceDeleteSucceeded = (state, action) => {
  const index = state.findIndex(m => m.id === action.payload.id);
  return index !== -1 ? state.delete(index) : state;
};

// const reduceUpdate = (state, action) => {
//   const index = state.findIndex(m => m.id === action.payload.id);
//   if (index !== -1) {
//     return state.update(index, m => m.set('text', action.payload.text));
//   }
//   return state;
// };

const reduceFetchSucceeded = (state, action) => {
  return List(action.payload.data.map(m => new Message(m)));
};

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SAVE_SUCCEEDED:
      return state.push(new Message(action.payload.message));
    case types.DELETE: return reduceDelete(state, action);
    case types.DELETE_SUCCEEDED: return reduceDeleteSucceeded(state, action);
    // case types.UPDATE: return reduceUpdate(state, action);
    case types.FETCH_SUCCEEDED: return reduceFetchSucceeded(state, action);
    default: return state;
  }
}

// Action creators

// const update = (id, text) => ({
//   type: types.UPDATE,
//   payload: { id, text }
// });

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

const save = ({text, parentId, author}) => ({
  type: types.SAVE,
  payload: {
    text,
    parentId,
    author,
  },
});

const saveSucceeded = message => ({
  type: types.SAVE_SUCCEEDED,
  payload: { message },
});

const saveFailed = error => ({
  type: types.SAVE_FAILED,
  payload: { error },
});

export const actions = {
  fetch,
  fetchSucceeded,
  fetchFailed,
  save,
  saveSucceeded,
  saveFailed,
  delete: myDelete,
  deleteSucceeded,
  deleteFailed,
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
