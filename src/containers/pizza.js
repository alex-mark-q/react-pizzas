import React from 'react'
import { Pane, App, Panel, Ingredients, Cart } from '../components'
import { useSelector } from 'react-redux'
import { SideBarContainer } from './sidebar'

export function Pizza() {

  const my = useSelector((state) => state);
  console.log('state', my)
  const pizza = useSelector(({ product }) => product.items.pizzas);
  const isLoaded = useSelector(({ product }) => product.isFetching);

  pizza?.map((obj) => {
    console.log('obj', obj)
  })

  return (
    <Pane.Contents>
      <App>
        <App.Content>
          <App.Layout>
            <App.Services>
              <Panel>
                <Panel.Hero>
                  <Ingredients>
                    <Ingredients.Container>
                      <Ingredients.Hero>
                        <Ingredients.List>
                          Ingredients.List
                        </Ingredients.List>
                      </Ingredients.Hero>
                    </Ingredients.Container>
                  </Ingredients>
                </Panel.Hero>
              </Panel>
            </App.Services>
            <App.Boarding>
              <Cart>
                <Cart.Title>
                  1. Choose pizza size & dough type
                </Cart.Title>
                <Cart.Block>
                  {
                    pizza?.map((item) => (
                      <Cart.List key = { item.id }>
                        <Cart.Image src = { item.imageUrl } />
                        <Cart.Size>
                          { item.size }
                        </Cart.Size>
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