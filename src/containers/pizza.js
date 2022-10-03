import React from 'react'
import { Pane, App, Panel, Ingredients, Cart, Order } from '../components'
import { useSelector, useDispatch } from 'react-redux'
import { SideBarContainer } from './sidebar'

export function Pizza() {

  const mystate = useSelector((state) => state);
  // console.log('state', mystate)

  const pizzas = useSelector(({ product }) => product.items.pizzas)

  const dough = useSelector(({ dough }) => dough.items.dough)
  const isLoaded = useSelector(({ product }) => product.isFetching)
  const dispatch = useDispatch();

  // pizza?.map((obj) => {
  //   console.log('obj', obj)
  // })

  function handleAddPizzaToCart() {
    dispatch({type: 'USER_PIZZA_ADD_TO_CART'});
  }

  return (
    <Pane.Contents>
      <App>
        <App.Content>
          <App.Layout>
            <App.Services>
              <Cart.Hero>
                <Cart.Ingredient>
                  <Cart.Title>
                    Size
                  </Cart.Title>
                  <Cart.Block>
                    <Cart.Ingredient>
                      
                    </Cart.Ingredient>
                  </Cart.Block>
                </Cart.Ingredient>
                <Cart.Ingredient>
                  <Cart.Title>
                    dough
                  </Cart.Title>
                  <Cart.Block>
                    <Cart.Ingredient>

                    </Cart.Ingredient>
                  </Cart.Block>
                </Cart.Ingredient>

              </Cart.Hero>
              <Cart.Hero>
                <Order>
                  <Order.Info>
                    <Order.Calories>
                      <Order.Title>Calories</Order.Title>
                    </Order.Calories>
                    <Order.Gramms>
                      <Order.Title>Gramm</Order.Title>
                    </Order.Gramms>
                  </Order.Info>
                  <Order.Price>
                    <Order.Title>Price</Order.Title>
                  </Order.Price>
                </Order>
              </Cart.Hero>
            </App.Services>
            <App.Boarding>
              <Cart>
                <Cart.Title>
                  1. Choose pizza size & dough type
                </Cart.Title>
                <Cart.Block>
                  <Cart.List profile = { pizzas } onClick = { () => { handleAddPizzaToCart() } } />
                </Cart.Block>
                <Cart.Block>
                  <Cart.DoughAndIngredients profile = { dough } />
                </Cart.Block>
              </Cart>
            </App.Boarding>
          </App.Layout>
         </App.Content>
      </App>
    </Pane.Contents>
  )
}