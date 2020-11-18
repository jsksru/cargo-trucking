import { call, put, takeEvery } from 'redux-saga/effects';
import { putRequestsData, changeLoadingStatus } from '../actions/requests';
import { errorEnable, changeErrorText, errorDisable} from '../actions/errors';
import * as requestsApi from '../../api/requests';
import { LOAD_REQUESTS } from '../constants/requests';

function* getRequests() {
  yield put(changeLoadingStatus(true));
  try {
    const result = yield call(requestsApi.getAll);
    if (result && result.length && result.length >= 1) {
      yield put(errorDisable());
      yield put(putRequestsData(result));
    } else {
      yield put(changeErrorText('Таблица заявок пуста'));
      yield put(errorEnable());
    }
  } catch(e) {
    yield put(changeErrorText('Ошибка загрузки данных'));
    yield put(errorEnable());
  }
  yield put(changeLoadingStatus(false));
}

function* MySaga() {
  yield takeEvery(LOAD_REQUESTS, getRequests);
}

export default MySaga;