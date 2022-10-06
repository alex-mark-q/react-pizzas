import React from 'react'
import { Pizza } from '../containers/pizza'
import { Pane, App } from '../components'
import { HeaderContainer } from './header'
import { Hero } from './hero'
import { useRef } from "react"
import Results from "../helpers/scroll"
import { forwardRef } from "react"

export function Main() {
  const resultRef = useRef(null);

  return (
    <>
      <Pane>
        <Pane.CPane>
          <Pane.Contents>
            <App>
              <App.Content>
                <App.Layout>
                  <App.Services src = "pizza1">
                    <App.Present>
                      <HeaderContainer />
                    </App.Present>
                  </App.Services>
                  <App.Boarding>
                    <Hero resultRef = { resultRef } />
                  </App.Boarding>
                </App.Layout>
              </App.Content>
            </App>
          </Pane.Contents>
        </Pane.CPane>
      </Pane>
      <Pane>
        <Pane.CPane>
          <Pane.Contents>
            <App>
              <App.Content>
                <App.Layout>
                  <Pizza />
                  <Results ref = { resultRef } />
                </App.Layout>
              </App.Content>
            </App>
          </Pane.Contents>
        </Pane.CPane>
      </Pane>
    </>
  );
}