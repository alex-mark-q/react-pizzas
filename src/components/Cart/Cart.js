import React from 'react'
import { Container, List, Block, Size, Image, Title, Price, Info, Cal, Text, Ingredient, Hero } from './styles/Cart'

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
Cart.Info = function CartInfo({ children, ...restProps }) {
  return <Info {...restProps}>{children}</Info>;
};
Cart.Cal = function CartCal({ children, ...restProps }) {
  return <Cal {...restProps}>{children}</Cal>;
};
Cart.Price = function CartPrice({ children, ...restProps }) {
  return <Price {...restProps}>{children}</Price>;
};
Cart.Text = function CartText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Cart.Ingredient = function CartIngredients({ children, ...restProps }) {
  return <Ingredient {...restProps}>{children}</Ingredient>;
};
Cart.Hero = function CartHero({ children, ...restProps }) {
  return <Hero {...restProps}>{children}</Hero>;
};