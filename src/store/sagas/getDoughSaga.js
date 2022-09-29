import { call, put, takeEvery, all, takeLatest, fork } from 'redux-saga/effects'
import { ApiPathname } from '../../api/constants'
import * as actions from '../actions'
import { getPizzaData } from '../../api'

function callApi() {
  return getPizzaData(ApiPathname.DOUGH)
}

function* getDoughProduct() {
  try {
    const pizzas = yield call(callApi)

    yield put(actions.getDoughSuccess(pizzas))
  } catch(error) {
    new Error(error);
  }
}

export function* watchGetDough() {
  yield takeEvery(actions.USER_DOUGH_FETCH_REQUESTED, getDoughProduct)
}

export default function* DoughSaga() {
  yield all([fork(getDoughProduct), fork(watchGetDough)])
}