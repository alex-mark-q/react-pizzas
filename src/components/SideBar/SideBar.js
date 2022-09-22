import React from 'react'
import { Container, Cart, HeadLine, Scroll, HeadLineWrapper, Span, SpanAction } from './styles/SideBar'

export default function SideBar ({  children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

SideBar.Cart = function SideBarCart({ children, ...restProps }) {
  return <Cart {...restProps}>{children}</Cart>;
};

SideBar.HeadLine = function SideBarHeadLine({ children, ...restProps }) {
  return <HeadLine {...restProps}>{children}</HeadLine>;
};

SideBar.Scroll = function SideBarScroll({ children, ...restProps }) {
  return <Scroll {...restProps}>{children}</Scroll>;
};

SideBar.HeadLineWrapper = function SideBarHeadLineWrapper({ children, ...restProps }) {
  return <HeadLineWrapper {...restProps}>{children}</HeadLineWrapper>;
};
SideBar.Span = function SideBarSpan({ children, ...restProps }) {
  return <Span {...restProps}>{children}</Span>;
};
SideBar.SpanAction = function SideBarAction({ children, ...restProps }) {
  return <SpanAction {...restProps}>{children}</SpanAction>;
};