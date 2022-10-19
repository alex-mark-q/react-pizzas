import React from 'react'
import { Pane, App, Cart, Order, Panel } from '../components'
import { useSelector } from 'react-redux'


export function Pizza() {
  const mystate = useSelector((state) => state);
  console.log('mystate ', mystate);
  const itemSize  = useSelector(({ product }) => product.items.size)
  const itemDough  = useSelector(({ dough }) => dough.items.doughItem)

  const isLoaded = useSelector(({ product }) => product.isFetching)

  const totalPriceIngredients = useSelector(( state ) => state.ingredients.totalPrice)
  const totalPriceProduct = useSelector(( state ) => state.product.totalPrice)
  const totalPriceDough = useSelector(( state ) => state.dough.totalPrice)

  const { dough, product,ingredients } = useSelector((state) => state);

  return (
    <>
      <App.RefLayout>
        <App.Wrapper>
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
          <Cart.Hero>
            <Cart.Title style = {{ color: '#fff' }}>
              ingredients
            </Cart.Title>
          </Cart.Hero>
          <Cart.WrapperIng>
            <Cart.Ing />
          </Cart.WrapperIng>
          <Cart.Hero>
            <Order>
              <Order.Info>
                <Order.Calories>
                  <Order.Title>Calories</Order.Title>
                  <span>
                    { 
                      [dough.totalCal, product.totalCal, ingredients.totalCal].reduce((sum, price) => {
                        return parseFloat(sum + price);
                      }, 0)
                    }
                   </span>
                </Order.Calories>
                <Order.Gramms>
                  <Order.Title>Gramm</Order.Title>
                  <span>
                    { 
                      [dough.totalGram, product.totalGram, ingredients.totalGram].reduce((sum, price) => {
                        return parseFloat(sum + price);
                      }, 0)
                    }
                  </span>
                </Order.Gramms>
              </Order.Info>
              <Order.Price>
                <Order.Title>Price</Order.Title>
                <span>
                  { 
                    [dough.totalPrice, product.totalPrice, ingredients.totalPrice].reduce((sum, price) => {
                      return parseFloat(sum + price);
                    }, 0)
                  }
                 </span>
              </Order.Price>
            </Order>
          </Cart.Hero>
        </App.Wrapper>
      </App.RefLayout>
    </>
  )
}