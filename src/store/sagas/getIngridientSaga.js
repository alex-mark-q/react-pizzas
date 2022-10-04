import { call, put, takeEvery, all, takeLatest, fork } from 'redux-saga/effects'
import { ApiPathname } from '../../api/constants'
import * as actions from '../actions'
import { getPizzaData } from '../../api'

function callApi() {
  return getPizzaData(ApiPathname.INGREDIENTS)
}

function* getIngProduct() {
  try {
    const ing = yield call(callApi)
    yield put(actions.getIngridientsSuccess(ing))
  } catch(error) {
    new Error(error);
  }
}

export function* watchGetIng() {
  yield takeEvery(actions.USER_INGRIDIENTS_FETCH_REQUESTED, getIngProduct)
}

export default function* IngSaga() {
  yield all([fork(getIngProduct), fork(watchGetIng)])
}