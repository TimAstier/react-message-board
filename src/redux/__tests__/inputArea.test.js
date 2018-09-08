import { Map } from 'immutable';
import reducer, { INITIAL_STATE, actions as inputAreaActions, selectors }
  from '../inputArea';
import { actions as messageActions } from '../message';
import { types as messagesTypes } from '../messages';
import { types as authTypes } from '../auth';
import { MAX_MESSAGE_LENGTH } from '../../constants'; 
import { Message } from '../../models';

describe('inputArea duck', () => {

  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });
  
  describe('SET_TEXT action', () => {
    
    it('updates text', () => {
      const action = inputAreaActions.setText('Hello!');
      const nextState = reducer(INITIAL_STATE, action);
      expect(selectors.getText(nextState)).toEqual('Hello!');
    });
    
    it('respects the MAX_MESSAGE_LENGTH limit', () => {
      let longText = '#'.repeat(MAX_MESSAGE_LENGTH + 1);
      const action = inputAreaActions.setText(longText);
      const nextState = reducer(INITIAL_STATE, action);
      expect(selectors.getText(nextState)).toEqual('');
    });

  });
  
  it('sets status to "saving" on a SAVE', () => {
    const state = Map({ status: 'new' });
    const expectedState = Map({ status: 'saving' });
    const action = { type: messagesTypes.SAVE };
    expect(reducer(state, action)).toEqual(expectedState);
  });
  
  it('sets status to "initial" on SAVE_SUCCEEDED', () => {
    const state = Map({ status: 'saving' });
    const action = { type: messagesTypes.SAVE_SUCCEEDED };
    const nextState = reducer(state, action); 
    expect(selectors.getStatus(nextState)).toEqual('initial');
  });
  
  it('sets text to an empty string on SAVE_SUCCEEDED', () => {
    const state = Map({ text: 'whatever' });
    const action = { type: messagesTypes.SAVE_SUCCEEDED };
    const nextState = reducer(state, action); 
    expect(selectors.getText(nextState)).toEqual('');
  });
  
  it('resets the state on SET_CURRENT_USER_ID', () => {
    const state = Map({ text: 'whatever', status: 'new', parentId: 4 });
    const action = { type: authTypes.SET_CURRENT_USER_ID };
    const nextState = reducer(state, action); 
    expect(nextState).toEqual(INITIAL_STATE);
  });
  
  it('handles CLICKED_RESPOND', () => {
    const message = new Message({ id: 1 });
    const action = messageActions.clickedRespond(message);
    const state = INITIAL_STATE.merge({ text: 'whatever' });
    const expectedState = Map({
      messageId: null,
      parentId: 1,
      text: '',
      status: 'new'
    });
    expect(reducer(state, action)).toEqual(expectedState);
  });
});
