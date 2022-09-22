import React from 'react'
import PropTypes from 'prop-types'
import { Main, Container, CPane, Contents, SideBarWrapper } from './styles/Pane'

export default function Pane ({  children }) {
  return (

    <Main>
      <Container>
        <CPane>
          { children }
        </CPane>
      </Container>
    </Main>

  )
}

Pane.Contents = function PaneContents({ children, ...restProps }) {
  return <Contents {...restProps}>{ children }</Contents>;
};
Pane.SideBarWrapper = function PaneSideBar({ children, ...restProps }) {
  return <SideBarWrapper {...restProps}>{ children }</SideBarWrapper>;
}

Pane.propTypes = {};

Pane.defaultProps = {};

