import { call, put, takeEvery, all, takeLatest, fork } from 'redux-saga/effects'
import { ApiPathname } from '../../api/constants'
import * as actions from '../actions'
import { getPizzaData } from '../../api'

function callApi() {
  return getPizzaData(ApiPathname.PIZZAS)
}

function* getPizzaProduct() {
  try {
    const pizzas = yield call(callApi)
        console.log('dough', pizzas)
    yield put(actions.getPizzaSuccess(pizzas))
  } catch(error) {
    new Error(error);
  }
}

export function* watchGetPizza() {
  yield takeEvery(actions.USER_PIZZA_FETCH_REQUESTED, getPizzaProduct)
}

export default function* PizzaSaga() {
  yield all([fork(getPizzaProduct), fork(watchGetPizza)])
}