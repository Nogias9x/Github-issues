import { all } from 'redux-saga/effects';
import { watchAddIssue } from "./issueSaga";
export default function* rootSaga() {
  yield all([
    watchAddIssue()
  ]);
}


