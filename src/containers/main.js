import React from 'react'

import { Pane, App } from '../components'
import { HeaderContainer } from './header'
import { Hero } from './hero'

export function Main() {

  return (
    <>
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
                <Hero />
              </App.Boarding>
            </App.Layout>
          </App.Content>
        </App>
      </Pane.Contents>
{/*        {pizza?.map((item) => (
            <Pizza key = { item.id } imageUrl = { item.imageUrl } size = { item.size } />
          )
        )}*/}
    </>
  );
}