import React from 'react'
import { Main } from '../containers/main'
import { Pizza } from '../containers/pizza'
import { Ingredients } from '../containers/ingredients'
import { SideBarContainer } from '../containers/sidebar'
import { Pane } from '../components'


export default function Home() {
  return (
  	<>
      <Pane>
        <Pane.CPane>
      		<Main>
      		</Main>
          <SideBarContainer />
        </Pane.CPane>
        <Pane.CPane>
          <Pizza />
        </Pane.CPane>
        <Pane.CPane>
          <Ingredients />
        </Pane.CPane>
      </Pane>
  	</>
  )
}