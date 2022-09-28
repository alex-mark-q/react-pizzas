import { call, put, takeEvery, all, takeLatest, fork } from 'redux-saga/effects'

import * as actions from '../actions'
import * as api from '../../api'

function* getPizzaProduct() {
  try {
    const pizzas = yield call(api.getAllPizzaData)
    yield put(actions.getUsersSuccess(pizzas))
  } catch(error) {
    new Error(error);
  }
}

export function* watchGetProducts() {
  yield takeEvery(actions.USER_POSTS_FETCH_REQUESTED, getPizzaProduct)
}

export function* rootSaga() {
  yield all([fork(getPizzaProduct), fork(watchGetProducts)])
}