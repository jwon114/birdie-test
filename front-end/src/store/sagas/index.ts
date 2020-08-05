import { call, put, all } from 'redux-saga/effects';
import axios from 'axios';

function* fetchEventTypes() {
  try {
    const eventTypes = yield call(axios.get, '/events/types');
    console.log('eventTypes', eventTypes);
    yield put({
      type: 'FETCH_EVENT_TYPES_SUCCESS',
      payload: eventTypes.data
    });
  } catch (e) {
    yield put({
      type: 'FETCH_EVENT_TYPES_FAILED',
      payload: e.message
    });
  }
}

function* initSaga() {
  yield all([
    fetchEventTypes()
  ]);
}

export default initSaga;