import React from 'react'
import { Content, List, Item, ItemLink } from './styles/Menu'

export default function Menu({ children, ...restProps }) {
  return <Content { ...restProps }> {children} </Content>;
};

Menu.Content = function HeaderContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};
Menu.List = function HeaderList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};
Menu.Item = function HeaderItem({ children, ...restProps }) {
  return (

    <Item {...restProps}>
      {children}
    </Item>

  ) 
};
Menu.ItemLink = function HeaderItemLink({ children, ...restProps }) {
  return <ItemLink {...restProps}>{children}</ItemLink>;
};