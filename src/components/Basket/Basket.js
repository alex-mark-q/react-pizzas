import React from 'react'
import { Element, Wrapper, Count, Link, Image } from './styles/Basket'
import { ReactComponent as BasketSvg } from './svg/004-online-shop.svg'

export default function Basket ({  children,  ...restProps }) {
  return <Element { ...restProps }> {children} </Element>;
}

Basket.Wrapper = function BasketWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};
Basket.Count = function BasketCount({ children, ...restProps }) {
  return <Count {...restProps}>{children}</Count>;
};
Basket.Link = function BasketLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
Basket.Image = function BasketImage({ children, ...restProps }) {
  return (

    <Image {...restProps}>
      <BasketSvg {...restProps} />
    </Image>

  )
};