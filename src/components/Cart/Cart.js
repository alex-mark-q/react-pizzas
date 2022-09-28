import React from 'react'
import { Container, List, Block, Size, Image, Title } from './styles/Cart'

export default function Cart ({  children,  ...restProps }) {
  return <Container { ...restProps }> {children} </Container>;
}
Cart.Title = function CartTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Cart.Block = function CartBlock({ children, ...restProps }) {
  return <Block {...restProps}>{children}</Block>;
};
Cart.List = function CartList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};
Cart.Size = function CartSize({ children, ...restProps }) {
  return <Size {...restProps}>{children}</Size>;
};
Cart.Image = function CartImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};