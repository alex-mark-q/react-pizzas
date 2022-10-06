import React, { forwardRef } from 'react'
import { Container, Info, Calories, Gramms, Title, Price } from './styles/Order'

export default function Order ({  children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Order.Info = function OrderInfo({ children, ...restProps }) {
  return  <Info {...restProps}>{children}</Info>
};
Order.Calories = function OrderCalories({ children, ...restProps }) {
  return  <Calories {...restProps}>{children}</Calories>
};
Order.Gramms = function OrderGramms({ children, ...restProps }) {
  return  <Gramms {...restProps}>{children}</Gramms>
};
Order.Title = function OrderTitle({ children, ...restProps }) {
  return  <Title {...restProps}>{children}</Title>
};
Order.Price = function OrderPrice({ children, ...restProps }) {
  return  <Price {...restProps}>{children}</Price>
};