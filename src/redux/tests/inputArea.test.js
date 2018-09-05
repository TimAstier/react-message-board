import reducer, { INITIAL_STATE, actions, selectors } from '../inputArea';
import { MAX_MESSAGE_LENGTH } from '../../constants'; 

describe('inputArea reducer', () => {

  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });
  
  describe('SET_TEXT', () => {
    
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
});
