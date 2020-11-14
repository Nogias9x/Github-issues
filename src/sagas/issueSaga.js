import { ADD_ISSUE } from '../actions/actionTypes';
import { takeEvery } from 'redux-saga/effects';

function* addIssue(issue) {
  yield console.log('this is addIssue', 1);
}

export function* watchAddIssue() {
  yield takeEvery(ADD_ISSUE, addIssue);
}
