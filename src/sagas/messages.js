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

// TODO: Check the status codes and handle errors

function* create(action) {
  try {
    const { text, parentId, author } = action.payload;
    const response = yield call(
      Api.post, '/messages', { text, parentId, author }
    );
    yield put(actions.createSucceeded(response.data));
  } catch (error) {
    yield put(actions.createFailed(error));
  }
}

function* update(action) {
  try {
    const { id, text, author, parentId } = action.payload;
    const response = yield call(
      Api.put, `/messages/${id}`, { text, author, parentId }
    );
    yield put(actions.updateSucceeded(response.data));
  } catch (error) {
    yield put(actions.updateFailed(error));
  }
}

/*
** NOTE: the server should delete all child messages when parent is deleted
** Right now only the parent message is deleted. This is OK since
** orphan child messages wont be displayed but it polutes
** the fake DB in db.json
*/
function* myDelete(action) {
  try {
    const { id } = action.payload;
    const response = yield call(
      Api.delete, '/messages', id
    );
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
    takeEvery(messagesTypes.CREATE, create),
    takeEvery(messagesTypes.DELETE, myDelete),
    takeEvery(messagesTypes.UPDATE, update),
  ]);
}

export default watchMessagesSagas;
