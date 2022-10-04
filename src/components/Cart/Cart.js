import React, { useState } from 'react'
import { WrapperIng, Container, List, Block, Size, Image, Title, Price, Info, Cal, Text, Ingredient, Hero, DoughAndIngredients, Dough, Scale, WrapperElement, Ing } from './styles/Cart'
import { useSelector, useDispatch } from 'react-redux'

export default function Cart ({  children,  ...restProps }) {
  return <Container { ...restProps }> {children} </Container>;
}
Cart.Title = function CartTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Cart.Block = function CartBlock({ children, ...restProps }) {
  return <Block {...restProps}>{children}</Block>;
};

Cart.List = function CartList({ profile, ...restProps }) {
  const dispatch = useDispatch();
  const [colorChange, setColorChange] = useState('white');
  function onAddPizzaSize(item) {

    console.log('size id ', item.id)
    setColorChange((ctr) => ( { ...ctr, [item.id]: (ctr[item.id] === "blue" ? "white" : "blue") }))

    dispatch({
      type: 'USER_PIZZA_ADD_TO_CART',
      payload: item
    });
  }
  return (
    profile?.map((item) => (
      <List className = { colorChange } key = { item.id } onClick = { () => { onAddPizzaSize(item) } } {...restProps} >
        <Image src = { item.imageUrl } />
        <Size {...restProps}>
          { item.size }
        </Size>
      </List>
    ))
  )
};

Cart.DoughAndIngredients = function CartDoughAndIngredients({ profile, ...restProps }) {
  const dispatch = useDispatch();
  function onAddDough(item) {
    dispatch({
      type: 'USER_DOUGH_ADD_TO_CART',
      payload: item
    });
  }

  return (
    profile?.map((item) => (
      <DoughAndIngredients  key = { item.id } onClick = { () => { onAddDough(item) } } {...restProps}>
        <Image src = { item.imageUrl } />
        <Text>
          { item.text }
        </Text>
        <Info>
          <Cal>
            { item.cal }
          </Cal>
          <Price>
            { item.price }
          </Price>
        </Info>
      </DoughAndIngredients>
    ))
  )
};

Cart.Scale = function CartScale({ profile, ...restProps }) {
  // console.log('Scale ', profile);
  return (
    profile?.map((item) => (
      <Scale key = { item.id } {...restProps}>
        <Image src = { item.imageUrl } />
        <Size {...restProps}>
          { item.size }
        </Size>
      </Scale>
    ))
  )
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
Cart.Dough = function CartDough({ children, ...restProps }) {
  return <Dough {...restProps}>{children}</Dough>;
};
Cart.WrapperElement = function CartWrapperElement({ children, ...restProps }) {
  return <WrapperElement {...restProps}>{children}</WrapperElement>;
};
Cart.Ing = function CartListIng({ children, ...restProps }) {
  return <Ing {...restProps}>{children}</Ing>;
};

Cart.WrapperIng = function CartWrapperIng({ children, ...restProps }) {
  return <WrapperIng {...restProps}>{children}</WrapperIng>;
};