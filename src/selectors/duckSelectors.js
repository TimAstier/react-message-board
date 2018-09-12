// Export selectors with a slice of the state to use in components
// This avoids having to change components if selectors implementation is changed
// See https://egghead.io/lessons/javascript-redux-colocating-selectors-with-reducers

import createDuckSelectors from '../helpers/createDuckSelectors';

import * as app from '../redux/app';
import * as auth from '../redux/auth';
import * as messages from '../redux/messages';
import * as inputArea from '../redux/inputArea';

const ducks = {
  app,
  auth,
  messages,
  inputArea,
};

export default createDuckSelectors(ducks);
