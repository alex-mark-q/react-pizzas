import { all, fork } from 'redux-saga/effects'
import * as PizzaSaga from './getPizzaSaga'
import * as DoughSaga from './getDoughSaga'
import * as IngSaga from './getIngridientSaga'

export default function* rootSaga() {
  yield all(
    [...Object.values(PizzaSaga), ...Object.values(DoughSaga), ...Object.values(IngSaga)].map(fork)
  );
}