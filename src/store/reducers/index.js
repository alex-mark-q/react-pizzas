import { combineReducers } from 'redux'
import { product } from './pizzas'
import { dough } from './dough'

export const rootReducer = combineReducers({
  product,
  dough
})