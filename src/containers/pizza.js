import React from 'react'
import { Pane, App, Panel, Ingredients, Cart, Order } from '../components'
import { useSelector } from 'react-redux'
import { SideBarContainer } from './sidebar'

export function Pizza() {

  const mystate = useSelector((state) => state);
  // console.log('state', mystate)
  const pizza = useSelector(({ product }) => product.items.pizzas)
  const dough = useSelector(({ dough }) => dough.items.dough)
  // console.log('dough', dough)
  const isLoaded = useSelector(({ product }) => product.isFetching)

  // dough?.map((obj) => {
  //   console.log('obj', obj)
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
                    <Cart.List>

                    </Cart.List>
                  </Cart.Block>
                </Cart.Ingredient>
                <Cart.Ingredient>
                  <Cart.Title>
                    dough
                  </Cart.Title>
                  <Cart.Block>
                    <Cart.List>

                    </Cart.List>
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
                  {isLoaded &&
                    pizza.map((item) => (
                      <Cart.List key = { item.id }>
                        <Cart.Image src = { item.imageUrl } />
                        <Cart.Size>
                          { item.size }
                        </Cart.Size>
                      </Cart.List>
                    ))
                  }
                </Cart.Block>
                <Cart.Block>
                  {
                    dough?.map((item) => (
                      <Cart.List key = { item.id }>
                        <Cart.Image src = { item.imageUrl } />
                        <Cart.Text>
                          { item.text }
                        </Cart.Text>
                        <Cart.Info>
                          <Cart.Cal>
                            { item.cal }
                          </Cart.Cal>
                          <Cart.Price>
                            { item.price }
                          </Cart.Price>
                        </Cart.Info>
                      </Cart.List>
                    ))
                  }
                </Cart.Block>
              </Cart>
            </App.Boarding>
          </App.Layout>
         </App.Content>
      </App>
    </Pane.Contents>
  )
}