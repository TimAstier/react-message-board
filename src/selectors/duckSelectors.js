// Export selectors with a slice of the state to use in components
// This avoids having to change components if selectors implementation is changed
// See https://egghead.io/lessons/javascript-redux-colocating-selectors-with-reducers

import bindSelectors from '../helpers/bindSelectors';

//TODO: DRY this

import * as fromApp from '../redux/app';
import * as fromAuth from '../redux/auth';
import * as fromMessages from '../redux/messages';
import * as fromInputArea from '../redux/inputArea';

const appSelectors = bindSelectors(
  state => state.get('app'),
  fromApp.selectors
);

const authSelectors = bindSelectors(
  state => state.get('auth'),
  fromAuth.selectors
);

const inputAreaSelectors = bindSelectors(
  state => state.get('inputArea'),
  fromInputArea.selectors
);

const messagesSelectors = bindSelectors(
  state => state.get('messages'),
  fromMessages.selectors
);

const duckSelectors = {
  app: appSelectors,
  auth: authSelectors,
  inputArea: inputAreaSelectors,
  messages: messagesSelectors,
};

export default duckSelectors;
