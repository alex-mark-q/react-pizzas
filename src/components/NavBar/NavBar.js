import React from 'react'
import { Container, Wrapper } from './styles/NavBar'

export default function NavBar ({  children,  ...restProps }) {
  return <Container { ...restProps }> {children} </Container>;
};
NavBar.Wrapper = function NavBarWrapper({ children, ...restProps }) {
  return  <Wrapper {...restProps}></Wrapper>
};


NavBar.propTypes = {};

NavBar.defaultProps = {};
