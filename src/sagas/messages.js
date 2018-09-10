import { takeLatest, put, call, all, takeEvery } from 'redux-saga/effects';
import { types as messagesTypes, actions} from '../redux/messages';
import Api from '../helpers/api';

function* fetch() {
  try {
    const response = yield call(Api.get, '/messages');
    yield put(actions.fetchSucceeded(response.data));
  } catch (error) {
    yield put(actions.fetchFailed(error));
  }
}

function* save(action) {
  try {
    const { text, parentId, author } = action.payload;
    const response = yield call(
      Api.post, '/messages', { text, parentId, author }
    );
    yield put(actions.saveSucceeded(response.data));
  } catch (error) {
    yield put(actions.saveFailed(error));
  }
}

// NOTE: the server should delete all child messages when parent is deleted
function* myDelete(action) {
  try {
    const { id } = action.payload;
    const response = yield call(
      Api.delete, '/messages', id
    );
    // TODO: mock-api should return 204
    if (response.status === 200) {
      yield put(actions.deleteSucceeded(id));
    } else {
      yield put(actions.deleteFailed());
    }
  } catch (error) {
    yield put(actions.deleteFailed(error));
  }
}


function* watchMessagesSagas() {
  yield all([
    takeLatest(messagesTypes.FETCH, fetch),
    takeEvery(messagesTypes.SAVE, save),
    takeEvery(messagesTypes.DELETE, myDelete),
  ]);
}

export default watchMessagesSagas;
