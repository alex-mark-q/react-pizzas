export const USER_PIZZA_FETCH_REQUESTED = 'USER_PIZZA_FETCH_REQUESTED'
export const USER_PIZZA_FETCH_SUCCEEDED = 'USER_PIZZA_FETCH_SUCCEEDED'

export const USER_DOUGH_FETCH_REQUESTED = 'USER_DOUGH_FETCH_REQUESTED'
export const USER_DOUGH_FETCH_SUCCEEDED = 'USER_DOUGH_FETCH_SUCCEEDED'

export function getPizzaSuccess(pizzas) {
  return {
    type: USER_PIZZA_FETCH_SUCCEEDED,
    payload: { pizzas }
  }
}
export function getPizzaRequest() {
  return {
    type: USER_PIZZA_FETCH_REQUESTED
  }
}

export function getDoughSuccess(dough) {
  return {
    type: USER_DOUGH_FETCH_SUCCEEDED,
    payload: { dough }
  }
}
export function getDoughRequest() {
  return {
    type: USER_DOUGH_FETCH_REQUESTED
  }
}