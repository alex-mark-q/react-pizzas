import React from 'react'
import { Pane, App, Panel, Cart } from '../components'
import { useSelector } from 'react-redux'

export function Ingredients() {
	const ing = useSelector(({ ingredients }) => ingredients.items)
  console.log('itemIng ', ing);
	return (
		<Pane.Contents>
      <App>
        <App.Content>
          <App.Layout>
            <App.Services>
							<div>Ingredients</div>
						</App.Services>
						<App.Boarding>
							<Panel.Hero>
                <Cart>
                  <Cart.Title>
                    2. Choose ingredients
                  </Cart.Title>
                  <Cart.Block>
                  	<Cart.DoughAndIngredients profile = { ing } />
                  </Cart.Block>
                </Cart>
                <Panel.Order>
                  <Panel.Button />
                    <Panel.Text>
                      <span>Next</span>
                      <span>Ready</span>
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