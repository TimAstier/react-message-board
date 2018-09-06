import { Map } from 'immutable';
import reducer, { INITIAL_STATE, actions, selectors } from '../inputArea';
import { types as messagesTypes } from '../messages';
import { MAX_MESSAGE_LENGTH } from '../../constants'; 

describe('inputArea duck', () => {

  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });
  
  describe('SET_TEXT action', () => {
    
    it('updates text', () => {
      const action = actions.setText('Hello!');
      const nextState = reducer(INITIAL_STATE, action);
      expect(selectors.getText(nextState)).toEqual('Hello!');
    });
    
    it('respects the MAX_MESSAGE_LENGTH limit', () => {
      let longText = '#'.repeat(MAX_MESSAGE_LENGTH + 1);
      const action = actions.setText(longText);
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
});
