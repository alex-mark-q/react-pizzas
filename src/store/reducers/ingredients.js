import { USER_INGRIDIENTS_FETCH_SUCCEEDED, USER_ING_ADD_TO_CART, USER_ING_REMOVE_CART_ITEM } from '../actions'
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
    case USER_ING_REMOVE_CART_ITEM: {
      const newItems = {
        ...state.items,
      };
      const currentTotalPrice = newItems[action.payload].items[0].price;
      const currentTotalCal = newItems[action.payload].items[0].cal;
      const currentTotalGram = newItems[action.payload].items[0].gram;
      // console.log('remove ', newItems[action.payload], 'currentTotalPrice', currentTotalPrice);
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCal: state.totalCal - currentTotalCal,
        totalGram: state.totalGram - currentTotalGram,
      };
    }
    default:
      return state;
  }
}