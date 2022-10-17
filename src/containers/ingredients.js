import React from 'react'
import { Pane, App, Panel, Cart } from '../components'
import { useSelector } from 'react-redux'
import { USER_ING_ADD_TO_CART as actions } from '../store/actions'

export function Ingredients({resultRef}) {
	const ing = useSelector(({ ingredients }) => ingredients.items.ing)
  
  const onScroll = (e) => {
    e.preventDefault();
    resultRef.current.scrollIntoView({ behavior: "smooth" });
  };

	return (
    <>
      <App.Boarding>
        <Panel.Hero>
          <Cart>
            <Cart.Title>
              2. Choose ingredients
            </Cart.Title>
            <Cart.Hero>
            	<Cart.DoughAndIngredients actions = { actions } profile = { ing } />
            </Cart.Hero>
          </Cart>
          <Panel.Order>
            <Panel.Button onClick = { onScroll } />
              <Panel.Text>
                <span>Next</span>
                <span>Ready</span>
              </Panel.Text>
          </Panel.Order>
        </Panel.Hero>
      </App.Boarding>
    </>
	)
}