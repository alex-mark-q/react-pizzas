export const USER_PIZZA_FETCH_REQUESTED = 'USER_PIZZA_FETCH_REQUESTED'
export const USER_PIZZA_FETCH_SUCCEEDED = 'USER_PIZZA_FETCH_SUCCEEDED'

export const USER_DOUGH_FETCH_REQUESTED = 'USER_DOUGH_FETCH_REQUESTED'
export const USER_DOUGH_FETCH_SUCCEEDED = 'USER_DOUGH_FETCH_SUCCEEDED'

export const USER_PIZZA_ADD_TO_CART = 'USER_PIZZA_ADD_TO_CART'
export const USER_DOUGH_ADD_TO_CART = 'USER_DOUGH_ADD_TO_CART'
export const USER_ING_ADD_TO_CART = 'USER_ING_ADD_TO_CART'
export const USER_ING_REMOVE_CART_ITEM = 'USER_ING_REMOVE_CART_ITEM'

export const USER_INGRIDIENTS_FETCH_SUCCEEDED = 'USER_INGRIDIENTS_FETCH_SUCCEEDED'
export const USER_INGRIDIENTS_FETCH_REQUESTED = 'USER_INGRIDIENTS_FETCH_REQUESTED'

type ActionCreatorPizzaSuccess = {
  type: typeof USER_PIZZA_FETCH_SUCCEEDED,
  payload: any
}

export const getPizzaSuccess = (pizzas): ActionCreatorPizzaSuccess => ({type: USER_PIZZA_FETCH_SUCCEEDED, payload: { pizzas }})

type ActionCreatorPizzaRequest = {
  type: typeof USER_PIZZA_FETCH_REQUESTED,
}

export const getPizzaRequest = (): ActionCreatorPizzaRequest => ({type: USER_PIZZA_FETCH_REQUESTED})

type ActionCreatorDoughSuccess = {
  type: typeof USER_DOUGH_FETCH_SUCCEEDED,
  payload: any
}

export const getDoughSuccess = (dough): ActionCreatorDoughSuccess => ({type: USER_DOUGH_FETCH_SUCCEEDED, payload: { dough }})

type ActionCreatorDoughRequest = {
  type: typeof USER_DOUGH_FETCH_REQUESTED,
}

export const getDoughRequest = (): ActionCreatorDoughRequest => ({type: USER_DOUGH_FETCH_REQUESTED}) 

type ActionCreatorIngridientsSuccess = {
  type: typeof USER_INGRIDIENTS_FETCH_SUCCEEDED,
  payload: any
}

export const getIngridientsSuccess = (ing): ActionCreatorIngridientsSuccess => ({type: USER_INGRIDIENTS_FETCH_SUCCEEDED, payload: { ing }})

type ActionCreatorIngridientsRequest = {
  type: typeof USER_INGRIDIENTS_FETCH_REQUESTED
}

export const getIngridientsRequest = (): ActionCreatorIngridientsRequest => ({type: USER_INGRIDIENTS_FETCH_REQUESTED})