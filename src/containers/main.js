import React, { forwardRef } from 'react'
import { Pizza } from '../containers/pizza'
import { Ingredients } from '../containers/ingredients'
import { Pane, App } from '../components'
import { HeaderContainer } from './header'
import { Hero } from './hero'
import { useRef } from "react"
import Results from "../helpers/scroll"
import { PanelOrder } from './order'
import { PizzaName } from './pizza-name'
import { SideBarContainer } from './sidebar'

export function Main() {

  const pizzaRef = useRef(null)
  const ingRef = useRef(null)
  const nameRef = useRef(null)

  return (
    <>
      <Pane>
        <App.Content>
          <App.Layout>
            <App.Col>
              <App.Services src = "pizza1">
                <App.Present>
                  <HeaderContainer />
                </App.Present>
              </App.Services>
              <App.Boarding>
                <Pizza />
              </App.Boarding>
            </App.Col>
          </App.Layout>
          <App.Layout>
            <Hero resultRef = { pizzaRef } />
            <Results ref = { pizzaRef } />
            <PanelOrder  resultRef = { ingRef } />
            <Results ref = { ingRef } />
            <Ingredients resultRef = { nameRef } />
            <PizzaName />
            <Results ref = { nameRef } />
          </App.Layout>
          <SideBarContainer />
        </App.Content>
      </Pane>
    </>
  );
}