import React from 'react'
import { Pane, App, Cart, Order } from '../components'
import { useSelector } from 'react-redux'

export function Pizza() {

  const mystate = useSelector((state) => state);
  console.log('state', mystate)

  const pizzas = useSelector(({ product }) => product.items.pizzas)
  const size  = useSelector(({ product }) => product.items.size)

  const dough = useSelector(({ dough }) => dough.items.dough)

  const isLoaded = useSelector(({ product }) => product.isFetching)

  // size.map((item) => {
  //   console.log('!!!', item);
  // })

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
                    <Cart.WrapperElement>
                      <Cart.Scale profile = { size } />
                    </Cart.WrapperElement>
                  </Cart.Block>
                </Cart.Ingredient>
                <Cart.Ingredient>
                  <Cart.Title>
                    dough
                  </Cart.Title>
                  <Cart.Block>
                    <Cart.WrapperElement>
                      <Cart.Dough>

                      </Cart.Dough>
                    </Cart.WrapperElement>
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
                  <Cart.List profile = { pizzas } />
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