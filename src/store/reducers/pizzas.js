import { 
  USER_PIZZA_FETCH_SUCCEEDED, 
  USER_DOUGH_FETCH_SUCCEEDED,
  USER_PIZZA_ADD_TO_CART,
  USER_DOUGH_ADD_TO_CART
} from '../actions'
import { InitialStateType } from './initStateType'

const initState: InitialStateType = {
  items: {},
  isFetching: false,
  totalPrice: 0,
  totalCal: 0,
  totalGram: 0
}

export const product = (state = initState, action: any): InitialStateType => {
  switch (action.type) {
    case USER_PIZZA_FETCH_SUCCEEDED: {
      return {
        ...state,
        items: action.payload,
        isFetching: true
      };
    }
    case USER_PIZZA_ADD_TO_CART: {
      const currentPizzaItems = action.payload
      const newItems = {
        ...state.items,
        size: [currentPizzaItems]
      }
      const totalPrice = currentPizzaItems.price
      const totalCal = currentPizzaItems.cal
      const totalGram = currentPizzaItems.gram
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
