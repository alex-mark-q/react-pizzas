import React from 'react'
import { Boarding, Container, Hero, List, ListItem } from './styles/Ingredients'

export default function Ingredients ({  children,  ...restProps }) {
  return <Boarding { ...restProps }> {children} </Boarding>;
};

Ingredients.Container = function ProfilesContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Ingredients.Hero = function ProfilesHero({ children, ...restProps }) {
  return <Hero {...restProps}>{children}</Hero>;
};

Ingredients.List = function ProfilesList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Ingredients.ListItem = function ProfilesListItem({ children, ...restProps }) {
  return <ListItem {...restProps}>{children}</ListItem>;
};