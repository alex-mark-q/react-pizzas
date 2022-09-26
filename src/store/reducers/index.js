import { combineReducers } from 'redux'
import { reducer } from './pizzas'

export const rootReducer = combineReducers({
  app: reducer,
})