import React, { useState, useMemo, ReactNode } from 'react'
import { Link, IngredientItemClose, IngredientWrapp, IngredientEmptyItem, WrapperIng, Container, List, Block, Size, Image, Title, Price, Info, Cal, Text, Ingredient, Hero, DoughAndIngredients, Dough, Scale, WrapperElement, IngredientItem } from './styles/Cart'
import { useSelector, useDispatch } from 'react-redux'
import { USER_ING_REMOVE_CART_ITEM as actionRemove } from '../../store/actions'

interface Props {
  children?: ReactNode
}
export interface CartListProps {
  id: number;
  size: string;
  price: number;
  gram: number;
  cal: number;
  imageUrl: string;
  text: string;
}

export default function Cart ({  children,  ...restProps }: Props) {
  return <Container { ...restProps }> {children} </Container>;
}
Cart.Title = function CartTitle({ children, ...restProps }: Props) {
  return <Title {...restProps}>{children}</Title>;
};
Cart.Block = function CartBlock({ children, ...restProps }: Props) {
  return <Block {...restProps}>{children}</Block>;
};

Cart.List = function CartList({ profile }) {
  const dispatch = useDispatch();
  function onAddPizzaSize(item) {
    dispatch({
      type: 'USER_PIZZA_ADD_TO_CART',
      payload: item
    });
  }
  return (
    (profile as unknown as CartListProps[])?.map((item) => (
      <List key = { item.id } onClick = {() => { onAddPizzaSize(item) }} >
        <Image src = { item.imageUrl } />
        <Size>
          { item.size }
        </Size>
      </List>
    ))
  )
};

Cart.DoughAndIngredients = function CartDoughAndIngredients({ profile, actions, ...restProps }) {
  const dispatch = useDispatch();
  function onAddDough(item) {
    dispatch({
      type: actions,
      payload: item
    });
  }

  return (
    profile?.map((item) => (
      <DoughAndIngredients key = { item.id } onClick = { () => { onAddDough(item) } } {...restProps}>
        <Image src = { item.imageUrl } />
        <Text>
          { item.name }
        </Text>
        <Info>
          <Cal>
            cal { item.cal }
          </Cal>
          <Price>
            $ { item.price }
          </Price>
        </Info>
      </DoughAndIngredients>
    ))
  )
};

Cart.IngredientEmptyItem = function CartIngredientEmptyItem({ ingredients, ingredientsCount, ...restProps }) {
  // console.log('IngredientEmptyItem ',ingredients, ingredientsCount)
  let countItem = ingredientsCount ? ingredients?.length - ingredientsCount?.length : ingredients?.length
  // console.log('countItem ',countItem);
  return (
    <>
      {countItem && Array(countItem).fill(undefined).map((el, id) => (
        <IngredientItem key = {id}>
          {el}
        </IngredientItem>
      ))}
    </>
  )
};
Cart.IngredientItem = function CartIngredientItem({ ingredientsCount, ...restProps }) {
  // console.log('ingredientsCount ',ingredientsCount)

  const [...filterIngridients] = ingredientsCount.filter(item => item !== ingredientsCount[ingredientsCount.length - 1])

  // console.log('filterIngridients ',filterIngridients)
  // const [...Ingridients] = Object.keys(filterIngridients).map((key) => {
  //   return filterIngridients[key].items[0];
  // });

  const [...Ingridients] = [...Object.keys(filterIngridients).map((key) => {
    return filterIngridients[key].items[0];
  })]
  // console.log('t ',Ingridients);

  return (
    <>
     {Ingridients?.map(({ id, name, imageUrl, cal, price}) => (
        <IngredientItem key = {id}>
          <IngredientWrapp>
            <Image src = {imageUrl} />
            <Price {...restProps}>
              $ { price }
            </Price>
          </IngredientWrapp>
          <Cart.IngredientItemClose id = {id} />
        </IngredientItem>
      ))}
    </>
  )
};
Cart.IngredientItemClose = function CartItemClose({ id, ...restProps }) {
  const dispatch = useDispatch();
  console.log('id IngredientItemClose ', id);
  const onRemoveItem = () => {
    console.log('remove click', id);
    dispatch({
      type: actionRemove,
      payload: id
    });
  };
  return (
    <IngredientItemClose>
      <Link onClick = {onRemoveItem} />
    </IngredientItemClose>
  )
}


Cart.Ing = function CartListIng({ children }: Props) {
  const ingredients = useSelector(({ ingredients }: any) => ingredients.items.ing)
  const { items } = useSelector(({ ingredients }: any) => ingredients)
  let ingredientsCount = [...Object.values(items)]
  // console.log('Cart.Ing', ingredientsCount, ingredients);
  return (
      <>
      {
        !ingredientsCount ? (<>loading..</>) : (
          <>
            <Cart.IngredientItem ingredientsCount = {ingredientsCount} />
            <Cart.IngredientEmptyItem ingredients = {ingredients} ingredientsCount = {ingredientsCount}/>
          </>
        )
      }
      </>
  );
};
Cart.Scale = function CartScale({ profile, ...restProps }) {
  return (
    (profile as unknown as CartListProps[])?.map((item) => (
      <Scale key = { item.id } {...restProps}>
        <Image src = { item.imageUrl } />
        <Size {...restProps}>
          { item.size || item.text }
        </Size>
      </Scale>
    ))
  )
};

Cart.Ingredient = function CartIngredients({ children, ...restProps }: Props) {
  return <Ingredient {...restProps}>{children}</Ingredient>;
};

Cart.Info = function CartInfo({ children, ...restProps }: Props) {
  return <Info {...restProps}>{children}</Info>;
};
Cart.Cal = function CartCal({ children, ...restProps }: Props) {
  return <Cal {...restProps}>{children}</Cal>;
};
Cart.Price = function CartPrice({ children, ...restProps }: Props) {
  return <Price {...restProps}>{children}</Price>;
};
Cart.Text = function CartText({ children, ...restProps }: Props) {
  return <Text {...restProps}>{children}</Text>;
};

Cart.Hero = function CartHero({ children, ...restProps }: Props) {
  return <Hero {...restProps}>{children}</Hero>;
};
Cart.Dough = function CartDough({ children, ...restProps }: Props) {
  return <Dough {...restProps}>{children}</Dough>;
};
Cart.WrapperElement = function CartWrapperElement({ children, ...restProps }: Props) {
  return <WrapperElement {...restProps}>{children}</WrapperElement>;
};

Cart.WrapperIng = function CartWrapperIng({ children, ...restProps }: Props) {
  return <WrapperIng {...restProps}>{children}</WrapperIng>;
};