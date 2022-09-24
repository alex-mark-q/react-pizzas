import React from 'react'
import { Container, Content, Layout, Services, Present, Boarding } from './styles/App'

export default function App ({  children,  ...restProps }) {
  return <Container { ...restProps }> {children} </Container>;
}

App.Content = function AppContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

App.Layout = function AppLayout({ children, ...restProps }) {
  return <Layout {...restProps}>{children}</Layout>;
};

App.Services = function AppServices({ children, ...restProps }) {
  return <Services {...restProps}>{children}</Services>;
};

App.Present = function AppPresent({ children, ...restProps }) {
  return <Present {...restProps}>{children}</Present>;
};

App.Boarding = function AppBoarding({ children, ...restProps }) {
  return <Boarding {...restProps}>{children}</Boarding>;
};