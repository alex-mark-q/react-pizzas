import { USER_INGRIDIENTS_FETCH_SUCCEEDED, USER_ING_ADD_TO_CART } from '../actions'
import { getTotalSum } from '../../helpers/sum'

const initState = {
  items: {},
  isFetching: false,
  totalPrice: 0,
  totalCal: 0,
  totalGram: 0
}

export const ingredients = (state = initState, action) => {
  switch (action.type) {
    case USER_INGRIDIENTS_FETCH_SUCCEEDED: {
      return {
        ...state,
        items: action.payload,
      };
    }
    case USER_ING_ADD_TO_CART: {

      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItemsPizza = {
        ...state.items,
          [action.payload.id]: {
            items: currentPizzaItems,
          },
      };
      const totalPrice = getTotalSum(newItemsPizza, 'price')
      const totalCal = getTotalSum(newItemsPizza, 'cal')
      const totalGram = getTotalSum(newItemsPizza, 'gram')
      
      return {
        ...state.ingItems,
        items: newItemsPizza,
        totalPrice,
        totalCal,
        totalGram
      }
    }
    default:
      return state;
  }
}