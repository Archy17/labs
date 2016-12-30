import { delay } from 'redux-saga';
import { put, call, takeEvery } from 'redux-saga/effects';

export function* helloSaga() {
  console.log('Hello Sagas!');
}

export function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: 'INCREMENT' });
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

// Single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    helloSaga(),
    watchIncrementAsync()
  ]
}
