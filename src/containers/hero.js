import React from 'react'
import { Panel } from '../components'

export function Hero({ resultRef }) {

  const onScroll = (e) => {
    e.preventDefault();
    resultRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
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
            <Panel.Button onClick = { onScroll } />
              <Panel.Text>
                <span>make your own pizza</span>
              </Panel.Text>
          </Panel.Order>
        </Panel.Description>
      </Panel.Hero>
    </Panel>
  )
}