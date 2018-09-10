/* eslint-disable no-undef */

import { List } from 'immutable';
import reducer, { INITIAL_STATE, actions, selectors } from '../messages';
import { Message } from '../../models';

const messageA = new Message({id: 1});
const messageB = new Message({id: 2, parentId: 1});
const messageC = new Message({id: 3, parentId: 1});

describe('messages duck', () => {
  describe('reducer', () => {
    it('returns the initial state', () => {
      expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
    });
    describe('SAVE_SUCCEEDED action', () => {
      it('adds a message in the List', () => {
        const message = new Message();
        const nextState = reducer(
          INITIAL_STATE,
          actions.saveSucceeded(new Message(message))
        );
        const expectedState = List([message]);
        expect(selectors.getMessages(nextState)).toEqual(expectedState);
      });
      it('adds a message at the end of the List', () => {
        const initialState = List([messageA]);
        const nextState = reducer(
          initialState,
          actions.saveSucceeded(messageB)
        );
        const expectedState = List([messageA, messageB]);
        expect(selectors.getMessages(nextState)).toEqual(expectedState);
      });
    });
    describe('handles DELETE_SUCCEEDED', () => {
      const initialState = List([messageA, messageB, messageC]);
      const nextState = reducer(initialState, actions.deleteSucceeded(1));
      const expectedState = List([messageB, messageC]);
      expect(selectors.getMessages(nextState)).toEqual(expectedState);
    });
    describe('handles DELETE', () => {
      const initialState = List([
        messageA,
        messageB,
        messageC,
      ]);
      const nextState = reducer(initialState, actions.delete(2));
      const expectedState = List([
        messageA,
        messageB.set('loading', true),
        messageC,
      ]);
      expect(selectors.getMessages(nextState)).toEqual(expectedState);
    });
    // describe('UPDATE action', () => {
    //   it('updates a message', () => {
    //     const messageA = new Message({id: 1, text: 'I like pancakes'});
    //     const messageB = new Message({id: 2, text: 'Not me'});
    //     const initialState = List([ messageA, messageB ]);
    //     const action = actions.update(2, 'Me too');
    //     const nextState = reducer(initialState, action);
    //     const expectedState = List(
    //       [ messageA, new Message({id: 2, text: 'Me too'}) ]
    //     );
    //     expect(selectors.getMessages(nextState)).toEqual(expectedState);
    //   });
    // });
  });
  describe('selectors', () => {
    describe('getThreads', () => {
      it('returns an array of arrays of Messages', () => {
        const messageD = new Message({id: 4});
        const messageE = new Message({id: 5, parentId: 4});
        const state = List([messageB, messageA, messageC, messageE, messageD]);
        const threads = [
          [messageA, messageB, messageC],
          [messageD, messageE],
        ];
        expect(selectors.getThreads(state)).toEqual(threads);
      });
      it('ignores orphan childMessages', () => {
        const messageF = new Message({id: 3, parentId: 2});
        const state = List([messageB, messageA, messageF]);
        const threads = [[messageA, messageB]];
        expect(selectors.getThreads(state)).toEqual(threads);
      });
    });
  });
});
