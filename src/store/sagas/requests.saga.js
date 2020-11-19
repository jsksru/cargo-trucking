import { call, put } from 'redux-saga/effects';
import { updateRequests, changeLoadingStatus, changeSavingStatus, loadRequestsTrigger } from '../actions/requests';
import { errorEnable, changeErrorText, errorDisable } from '../actions/errors';
import * as requestsApi from '../../api/requests';

export function* getRequests() {
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

export function* newRequest(params) {
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