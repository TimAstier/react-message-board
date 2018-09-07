import { List } from 'immutable';
import { createSelector } from 'reselect';
import { Message } from '../models';

// Types

export const types = {
  ADD: 'messages/ADD',
  REMOVE: 'messages/REMOVE',
  UPDATE: 'messages/UPDATE',
  FETCH: 'messages/FETCH',
  FETCH_SUCCEEDED: 'messages/FETCH_SUCCEEDED',
  FETCH_FAILED: 'messages/FETCH_FAILED',
  SAVE: 'messages/SAVE',
  SAVE_SUCCEEDED: 'messages/SAVE_SUCCEEDED',
  SAVE_FAILED: 'messages/SAVE_FAILED',
};

// Reducer

export const INITIAL_STATE = List();

const reduceRemove = (state, action) => {
  const index = state.findIndex(m => m.id === action.payload.id);
  return index !== -1 ? state.delete(index) : state;
};

const reduceUpdate = (state, action) => {
  const index = state.findIndex(m => m.id === action.payload.id);
  if (index !== -1) {
    return state.update(index, m => m.set('text', action.payload.text));
  }
  return state;
};

const reduceFetchSucceeded = (state, action) => {
  return List(action.payload.data.map(m => new Message(m)));
};

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch(action.type) {
    case types.ADD: return state.push(new Message(action.payload.message));
    case types.REMOVE: return reduceRemove(state, action);
    case types.UPDATE: return reduceUpdate(state, action);
    case types.FETCH_SUCCEEDED: return reduceFetchSucceeded(state, action);
    case types.SAVE_SUCCEEDED:
      return state.push(new Message(action.payload.data));
    default: return state;
  }
}

// Action creators

const add = message => ({
  type: types.ADD,
  payload: { message }
});

const remove = id => ({
  type: types.REMOVE,
  payload: { id }
});

const update = (id, text) => ({
  type: types.UPDATE,
  payload: { id, text }
});

const fetch = () => ({
  type: types.FETCH
});

const fetchSucceeded = data => ({
  type: types.FETCH_SUCCEEDED,
  payload: { data }
});

const fetchFailed = error => ({
  type: types.FETCH_FAILED,
  payload: { error }
});

const save = ({text, parentId, author}) => ({
  type: types.SAVE,
  payload: {
    text,
    parentId,
    author
  }
});

const saveSucceeded = data => ({
  type: types.SAVE_SUCCEEDED,
  payload: { data }
});

const saveFailed = error => ({
  type: types.SAVE_FAILED,
  payload: { error }
});

export const actions = {
  add,
  remove,
  update,
  fetch,
  fetchSucceeded,
  fetchFailed,
  save,
  saveSucceeded,
  saveFailed,
};

// Selectors

const getMessages = state => state;

// TODO: move this logic in a normalizer function
const getThreads = createSelector(
  getMessages,
  messages => {
    const threads = [];
    let threadIndexes = {};
    const childMessages = [];
    let index = 0;
    messages.forEach(m => {
      if (m.parentId === null) {
        threads.push([ m ]);
        threadIndexes[m.id] = index;
        index++;
      }
      else childMessages.push(m);
    });
    childMessages.forEach(m => {
      if (threadIndexes[m.parentId] !== undefined) {
        threads[threadIndexes[m.parentId]].push(m);
      }
    });
    return threads;
  }
);

export const selectors = {
  getMessages,
  getThreads,
};
