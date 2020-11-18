import { call, put, takeEvery } from 'redux-saga/effects';
import { updateRequests, changeLoadingStatus, changeSavingStatus, loadRequestsTrigger } from '../actions/requests';
import { errorEnable, changeErrorText, errorDisable } from '../actions/errors';
import * as requestsApi from '../../api/requests';
import { LOAD_REQUESTS_TRIGGER, NEW_REQUEST } from '../constants/requests';

function* getRequests() {
  yield put(changeLoadingStatus(true));
  try {
    const result = yield call(requestsApi.getAll);
    if (result && result.length && result.length >= 1) {
      yield put(errorDisable());
      yield put(updateRequests(result));
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

function* newRequest(params) {
  yield put(changeSavingStatus(true));
  try {
    const result = yield call(requestsApi.addNew, params.data);
    if (result) {
      yield put(loadRequestsTrigger());
      yield put(changeSavingStatus(false));
      params.historyRouter.push('/');
    } else {
      yield put(changeErrorText('Ошибка добавления данных'));
      yield put(errorEnable());
    }
  } catch(e) {
    yield put(changeErrorText('Ошибка добавления данных'));
    yield put(errorEnable());
  }
  yield put(changeSavingStatus(false));
}

function* MySaga() {
  yield takeEvery(LOAD_REQUESTS_TRIGGER, getRequests);
  yield takeEvery(NEW_REQUEST, newRequest);
}

export default MySaga;