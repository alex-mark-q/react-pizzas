import { combineReducers } from 'redux'
import { product } from './pizzas'
import { dough } from './dough'
import { ingredients } from './ingredients'

export const rootReducer = combineReducers({
  product,
  dough,
  ingredients
})