//===> from saga middleware
// import {AnyAction} from 'redux';
import {fork, all, takeEvery} from 'redux-saga/effects';
import {Actions} from './actions';
import {tryFetching} from './config';

function* watchLabTest() {
  // update reference
  yield takeEvery(Actions.FETCH, () => tryFetching());
}

export function* rootSaga() {
  yield all([
    //lab Test Sagas
    fork(watchLabTest),
  ]);
}
