import { USER_POSTS_FETCH_SUCCEEDED } from '../actions'

const initState = {
  items: [],
  isFetching: false
}

export const product = (state = initState, action) => {
  switch (action.type) {
    case USER_POSTS_FETCH_SUCCEEDED: 
      return {
        ...state,
        items: action.payload,
        isFetching: true
      };
    default:
      return state;
  }
}
