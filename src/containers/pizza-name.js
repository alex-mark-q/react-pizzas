import React from 'react'
import { App, Cart, Order, Panel, InputName } from '../components'

export function PizzaName() { 
	return (
		<App.Boarding>
		  <Panel.Hero>
		    <Cart>
		      <Cart.Title>
		        3. You can give a name to your pizza
		      </Cart.Title>
		      <Cart.Block>
		      	<InputName />
		      </Cart.Block>
		    </Cart>
		    <Panel.Order>
		      <Panel.Button />
		        <Panel.Text>
		          <span>Next</span>
		          <span>Add to cart</span>
		        </Panel.Text>
		    </Panel.Order>
		  </Panel.Hero>
		</App.Boarding>
	)
}