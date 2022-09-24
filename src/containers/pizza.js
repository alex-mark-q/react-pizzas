import React from 'react'
import { Pane, App, Panel, Ingredients } from '../components'

export function Pizza({ children }) {
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
                        </Ingredients.List>
                      </Ingredients.Hero>
                    </Ingredients.Container>
                  </Ingredients>
          			</Panel.Hero>
          		</Panel>
          	</App.Services>
          	<App.Boarding>
							<Panel>
								<Panel.Hero>
									
								</Panel.Hero>
          		</Panel>
          	</App.Boarding>
          </App.Layout>
         </App.Content>
      </App>
    </Pane.Contents>

  )
}