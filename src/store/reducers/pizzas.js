import { 
  USER_PIZZA_FETCH_SUCCEEDED, 
  USER_DOUGH_FETCH_SUCCEEDED,
  USER_PIZZA_ADD_TO_CART
} from '../actions'

const initState = {
  items: [],
  isFetching: false
}

export const product = (state = initState, action) => {
  switch (action.type) {
    case USER_PIZZA_FETCH_SUCCEEDED: {
      const pizza = action.payload.pizza
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
      return {
        items: newItems
      }
    }
    default:
      return state;
  }
}
