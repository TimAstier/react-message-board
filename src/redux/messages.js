import { List } from 'immutable';
import { createSelector } from 'reselect';
import { Message } from '../models';

// Types

export const types = {
  ADD: 'messages/ADD',
  REMOVE: 'messages/REMOVE',
  UPDATE: 'messages/UPDATE',
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

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch(action.type) {
    case types.ADD: return state.push(new Message(action.payload.message));
    case types.REMOVE: return reduceRemove(state, action);
    case types.UPDATE: return reduceUpdate(state, action);
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

export const actions = {
  add,
  remove,
  update,
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
    return List(threads);
  }
);

export const selectors = {
  getMessages,
  getThreads,
};
