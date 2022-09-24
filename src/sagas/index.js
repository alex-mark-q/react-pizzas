import { call, put, takeEvery, all, takeLatest } from 'redux-saga/effects'

import {
  USER_POSTS_FETCH_REQUESTED,
  USER_POSTS_FETCH_SUCCEEDED,
  USER_POSTS_FETCH_FAILED,
} from '../actions'
import { getPizzaData } from '../api'

function* fetchPizzaData(action) {
	try {
		const callResult = call(getPizzaData, action.payload.obj)
		const PizzaaData = yield callResult
    const putResult = put({
    	type: USER_POSTS_FETCH_SUCCEEDED,
      payload: {
        data: PizzaaData,
      },
    })
    yield putResult
	} catch(e) {
		yield put({
      type: USER_POSTS_FETCH_FAILED,
      payload: { message: e.message },
    })
	}
}

export function* rootSaga() {
  yield takeLatest(USER_POSTS_FETCH_REQUESTED, fetchPizzaData)
}