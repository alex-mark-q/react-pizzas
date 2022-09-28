export const USER_POSTS_FETCH_REQUESTED = 'USER_POSTS_FETCH_REQUESTED'
export const USER_POSTS_FETCH_SUCCEEDED = 'USER_POSTS_FETCH_SUCCEEDED'
export const USER_POSTS_FETCH_FAILED = 'USER_POSTS_FETCH_FAILED'

export function getUsersSuccess(pizzas) {
  return {
    type: USER_POSTS_FETCH_SUCCEEDED,
    payload: { pizzas }
  }
}
export function getUsersRequest() {
  return {
    type: USER_POSTS_FETCH_REQUESTED
  }
}