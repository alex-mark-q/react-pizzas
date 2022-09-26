import React from 'react'
import { Container, Content, Menu, Item, ItemLink } from './styles/Header'

export default function Header ({  children,  ...restProps }) {
  return <Container { ...restProps }> {children} </Container>;
};
