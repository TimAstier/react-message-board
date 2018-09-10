// single entry point to start all Sagas at once
import { all } from 'redux-saga/effects';

import watchMessagesSagas from './sagas/messages';

export default function* rootSaga() {
  yield all([
    watchMessagesSagas(),
  ]);
}
