// Used to provide a store to stories in react storybook

import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../rootReducer';

const store = createStore(rootReducer);

/* eslint-disable-next-line react/prop-types */
const Provider = ({ story }) => (
  <ReduxProvider store={store}>
    {story}
  </ReduxProvider>
);

export default Provider;
