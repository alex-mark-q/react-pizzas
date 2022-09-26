import { call, put, takeEvery, all, takeLatest, fork } from 'redux-saga/effects'

import * as actions from '../actions'
import * as api from '../../api'

function* getPizzaProduct() {
  const pizzas = yield call(api.getAllPizzaData)
  console.log('pizzas ', pizzas);
  yield put(actions.receiveProducts(pizzas))
}

export function* rootSaga() {
  yield all([fork(getPizzaProduct)])
}