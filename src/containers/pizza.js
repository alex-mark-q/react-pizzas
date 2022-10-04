import React from 'react'
import { Pane, App, Cart, Order, Panel } from '../components'
import { useSelector } from 'react-redux'

export function Pizza() {

  const mystate = useSelector((state) => state);
  console.log('state', mystate)

  const pizzas = useSelector(({ product }) => product.items.pizzas)
  const itemSize  = useSelector(({ product }) => product.items.size)
  const itemDough  = useSelector(({ product }) => product.items.dough)

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
                  <Cart.Title style = {{ color: '#fff' }}>
                    Size
                  </Cart.Title>
                  <Cart.Block>
                    <Cart.WrapperElement>
                      <Cart.Scale profile = { itemSize } />
                    </Cart.WrapperElement>
                  </Cart.Block>
                </Cart.Ingredient>
                <Cart.Ingredient>
                  <Cart.Title style = {{ color: '#fff' }}>
                    dough
                  </Cart.Title>
                  <Cart.Block>
                    <Cart.WrapperElement>
                      <Cart.Scale profile = { itemDough } />
                    </Cart.WrapperElement>
                  </Cart.Block>
                </Cart.Ingredient>
              </Cart.Hero>
              <Cart.Title style = {{ color: '#fff' }}>
                ingredients
              </Cart.Title>
              <Cart.Hero>
              
                <Cart.Ingredient>
                  <Cart.WrapperIng>
                    <Cart.Ing>

                    </Cart.Ing>
                  </Cart.WrapperIng>
                </Cart.Ingredient>
                <Cart.Ingredient>
                  <Cart.WrapperIng>
                      <Cart.Ing>
                        
                      </Cart.Ing>
                  </Cart.WrapperIng>
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
              <Panel.Hero>
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
                <Panel.Order>
                  <Panel.Button>
                    
                  </Panel.Button>
                    <Panel.Text>
                      <span>Next</span>
                      <span>Choose ingredients</span>
                    </Panel.Text>
                </Panel.Order>
              </Panel.Hero>
            </App.Boarding>
          </App.Layout>
         </App.Content>
      </App>
    </Pane.Contents>
  )
}