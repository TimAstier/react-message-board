// Export selectors with a slice of the state to use in components
// This avoids having to change components if selectors implementation is changed
// See https://egghead.io/lessons/javascript-redux-colocating-selectors-with-reducers

import bindSelectors from '../utils/bindSelectors';

import * as fromInputArea from '../redux/inputArea';

const inputAreaSelectors = bindSelectors(
  state => state.get('inputArea'),
  fromInputArea.selectors
);

const duckSelectors = {
  inputArea: inputAreaSelectors,
};

export default duckSelectors;
