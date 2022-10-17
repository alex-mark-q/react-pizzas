import React from 'react'
import { App, Cart, Order, Panel } from '../components'
import { useSelector } from 'react-redux'
import { USER_DOUGH_ADD_TO_CART as actions } from '../store/actions'

export function PanelOrder({ resultRef }) {
	const pizzas = useSelector(({ product }) => product.items.pizzas)
	const dough = useSelector(({ dough }) => dough.items.dough)

	const onScroll = (e) => {
    e.preventDefault();
    resultRef.current.scrollIntoView({ behavior: "smooth" });
  };
	return (
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
		        <Cart.DoughAndIngredients actions = { actions } profile = { dough } />
		      </Cart.Block>
		    </Cart>
		    <Panel.Order>
		      <Panel.Button onClick = { onScroll } />
		        <Panel.Text>
		          <span>Next</span>
		          <span>Choose ingredients</span>
		        </Panel.Text>
		    </Panel.Order>
		  </Panel.Hero>
		</App.Boarding>
	)
}