import { USER_INGRIDIENTS_FETCH_SUCCEEDED } from '../actions'

const initState = {
  items: [],
  isFetching: false
}

export const ingredients = (state = initState, action) => {
  switch (action.type) {
    case USER_INGRIDIENTS_FETCH_SUCCEEDED: {
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