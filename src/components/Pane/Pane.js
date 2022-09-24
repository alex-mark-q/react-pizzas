import React from 'react'
import PropTypes from 'prop-types'
import { Main, Container, CPane, Contents, SideBarWrapper } from './styles/Pane'

export default function Pane ({  children }) {
  return (

    <Main>
      <Container>
        { children }
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
Pane.CPane = function PaneCPane({ children, ...restProps }) {
  return <CPane {...restProps}>{ children }</CPane>;
}


Pane.propTypes = {};

Pane.defaultProps = {};

