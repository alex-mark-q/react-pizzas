import { USER_DOUGH_FETCH_SUCCEEDED, USER_DOUGH_ADD_TO_CART } from '../actions'
import { getTotalSum } from '../../helpers/sum'
import { InitialStateType } from './initStateType'

const initState: InitialStateType = {
  items: {},
  isFetching: false,
  totalPrice: 0,
  totalCal: 0,
  totalGram: 0
}

export const dough = (state = initState, action: any): InitialStateType => {
  switch (action.type) {
    case USER_DOUGH_FETCH_SUCCEEDED: {
      const dough = action.payload.dough
      return {
        ...state,
        items: action.payload,
        isFetching: true
      };
    }
    case USER_DOUGH_ADD_TO_CART: {
      const currentDoughItems = action.payload
      const newItems = {
        ...state.items,
        doughItem: [currentDoughItems]
      }
      const totalPrice = currentDoughItems.price
      const totalCal = currentDoughItems.cal
      const totalGram = currentDoughItems.gram
      return {
        items: newItems,
        totalPrice,
        totalCal,
        totalGram
      }
    }
    default:
      return state;
  }
}