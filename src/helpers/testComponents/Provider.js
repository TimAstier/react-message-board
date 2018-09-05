// Used to provide a store to stories in react storybook

import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import rootReducer from '../../rootReducer';
import { createStore } from 'redux';

const store = createStore(rootReducer);

const Provider = ({ story }) => (
  <ReduxProvider store={store}>
    {story}
  </ReduxProvider>
);

export default Provider;
