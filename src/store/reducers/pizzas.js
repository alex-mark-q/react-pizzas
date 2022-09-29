import { USER_PIZZA_FETCH_SUCCEEDED, USER_DOUGH_FETCH_SUCCEEDED } from '../actions'

const initState = {
  items: [],
  isFetching: false
}

export const product = (state = initState, action) => {
    console.log(' pizza action ', action.type);
  switch (action.type) {
    case USER_PIZZA_FETCH_SUCCEEDED: {
      console.log('USER_PIZZA_FETCH_SUCCEEDED')
      const pizza = action.payload.pizza
      return {
        ...state,
        items: action.payload,
        isFetching: true
      };
    }
    default:
      return state;
  }
}
