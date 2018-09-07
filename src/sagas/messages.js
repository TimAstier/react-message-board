import { takeLatest, put, call, all } from 'redux-saga/effects';
import { types, actions as messagesActions } from '../redux/messages';
import { actions as appActions } from '../redux/app';
import Api from '../helpers/api';

function* fetch() {
  try {
    const response = yield call(Api.get, '/messages');
    yield put(messagesActions.fetchSucceeded(response.data));
    yield put(appActions.setLoading(false));
  }
  catch(error) {
    yield put(messagesActions.fetchFailed(error));
  }
}

function* save(action) {
  try {
    const { text, parentId, author } = action.payload;
    const response = yield call(
      Api.post, '/messages', { text, parentId, author }
    );
    yield put(messagesActions.saveSucceeded(response.data));
  }
  catch(error) {
    yield put(messagesActions.saveFailed(error));
  }
}

function* watchMessagesSagas() {
  yield all([
    takeLatest(types.FETCH, fetch),
    takeLatest(types.SAVE, save),
  ]);
}

export default watchMessagesSagas;
