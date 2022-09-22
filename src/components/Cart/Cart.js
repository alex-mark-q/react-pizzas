import React from 'react'
import { Popup, Wrapper } from './styles/Cart'

export default function Cart ({  children,  ...restProps }) {
  return <Popup { ...restProps }> {children} </Popup>;
}

Cart.Wrapper = function ProfilesWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};