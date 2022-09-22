import React from 'react'
import { Container, Content, Layout, Services } from './styles/App'

export default function App ({  children,  ...restProps }) {
  return <Container { ...restProps }> {children} </Container>;
}

App.Content = function AppContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};