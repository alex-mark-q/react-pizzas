import React from 'react'
import { Container, Content, Menu, Item, ItemLink } from './styles/Header'

export default function Header ({  children,  ...restProps }) {
  return <Container { ...restProps }> {children} </Container>;
};
Header.Content = function HeaderContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};
Header.Menu = function HeaderMenu({ children, ...restProps }) {
  return <Menu {...restProps}>{children}</Menu>;
};
Header.Item = function HeaderItem({ children, ...restProps }) {
  return (

    <Item {...restProps}>
      {children}
    </Item>

  ) 
};
Header.ItemLink = function HeaderItemLink({ children, ...restProps }) {
  return <ItemLink {...restProps}>{children}</ItemLink>;
};