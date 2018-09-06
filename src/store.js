import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(
        sagaMiddleware
      )
    )
  );
  
// Start all Sagas at once
// (A little awkard to get this here in this file)
sagaMiddleware.run(rootSaga);

export default store;
