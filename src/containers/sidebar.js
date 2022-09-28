import React from 'react';
import { Pane, Cart, SideBar, Basket } from '../components';


export function SideBarContainer({ children }) {
  return (

  	<Pane.SideBarWrapper>
      <SideBar>
        <SideBar.Cart>
          <Basket>
            <Basket.Wrapper>
              <Basket.Link>
                <Basket.Image />
              </Basket.Link>
            </Basket.Wrapper>
            <Basket.Count>
              1
            </Basket.Count>
          </Basket>
        </SideBar.Cart>
        <SideBar.HeadLine>
          <SideBar.HeadLineWrapper>
            <SideBar.Span>
              make pizza
            </SideBar.Span>
          </SideBar.HeadLineWrapper>
        </SideBar.HeadLine>
        <SideBar.Scroll>
          <SideBar.SpanAction>
            Scroll
          </SideBar.SpanAction>
        </SideBar.Scroll>
      </SideBar>
    </Pane.SideBarWrapper>

  )
}