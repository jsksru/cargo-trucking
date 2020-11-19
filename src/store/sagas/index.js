import { takeEvery } from 'redux-saga/effects';

import { LOAD_REQUESTS_TRIGGER, NEW_REQUEST } from '../constants/requests';

import * as requestSaga from './requests.saga';

function* MySaga() {
  yield takeEvery(LOAD_REQUESTS_TRIGGER, requestSaga.getRequests);
  yield takeEvery(NEW_REQUEST, requestSaga.newRequest);
}

export default MySaga;