import { USER_DOUGH_FETCH_SUCCEEDED } from '../actions'

const initState = {
  items: [],
  isFetching: false
}

export const dough = (state = initState, action) => {
  console.log(' dough action ', action);
  switch (action.type) {
    case USER_DOUGH_FETCH_SUCCEEDED: {
      const dough = action.payload.dough
      return {
        ...state,
        items: action.payload,
        //dough,
        isFetching: true
      };
    }
    default:
      return state;
  }
}