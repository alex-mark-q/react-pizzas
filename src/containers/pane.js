import React from 'react'
import { Pane, App, Header, Panel, Logo, NavBar } from '../components'
import { Pizza } from './pizza'
import { addPizzaToCart } from '../store/actions' 
import { HeaderContainer } from './header'

import { useDispatch, useSelector } from 'react-redux'
import { USER_POSTS_FETCH_REQUESTED } from '../store/actions'

export function PaneContainer({ children }) {

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ type: USER_POSTS_FETCH_REQUESTED, payload: { pathname: 'pizzas' } })
  }
  
  return (
    <>
      <Pane>
        <Pane.CPane>
          <Pane.Contents>
            <App>
              <App.Content>
                <App.Layout>
                  <App.Services>
                    <App.Present>
                      <HeaderContainer />
                    </App.Present>
                  </App.Services>
                  <App.Boarding>
                    <Panel>
                      <Panel.Hero>
                        <Panel.Description>
                          <Panel.Header>
                            <Panel.Title>
                              create your pizza
                            </Panel.Title>
                            <Panel.SubTitle>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            </Panel.SubTitle>
                          </Panel.Header>
                          <Panel.Step>
                            <Panel.StepElem>
                              <Panel.StepImage src = '/images/png/step/icon-img-1.png' alt = '' />
                              <Panel.StepChain>
                                1. Choose pizza size
                              </Panel.StepChain>
                            </Panel.StepElem>
                            <Panel.StepElem>
                              <Panel.StepImage src = '/images/png/step/icon-img-2.png' alt = '' />
                              <Panel.StepChain>
                                2. Choose dough type
                              </Panel.StepChain>
                            </Panel.StepElem>
                            <Panel.StepElem>
                              <Panel.StepImage src = '/images/png/step/icon-img-1.png' alt = '' />
                              <Panel.StepChain>
                                3. Choose ingredients
                              </Panel.StepChain>
                            </Panel.StepElem>
                          </Panel.Step>
                          <Panel.Order>
                            <Panel.Button onClick={() => handleClick()}>
                              <span>make your own pizza</span>
                            </Panel.Button>
                          </Panel.Order>
                        </Panel.Description>
                      </Panel.Hero>
                    </Panel>
                  </App.Boarding>
                </App.Layout>
              </App.Content>
            </App>
          </Pane.Contents>
        </Pane.CPane>
        <Pizza>
        </Pizza>
      </Pane>
    </>
  );
}