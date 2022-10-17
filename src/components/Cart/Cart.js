import React, { useState, useMemo } from 'react'
import { IngredientWrapp, IngredientEmptyItem, WrapperIng, Container, List, Block, Size, Image, Title, Price, Info, Cal, Text, Ingredient, Hero, DoughAndIngredients, Dough, Scale, WrapperElement, IngredientItem } from './styles/Cart'
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

    // console.log('size id ', item.id)
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
      {countItem && Array(countItem).fill().map((el, id) => (
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
        </IngredientItem>
      ))}
    </>
  )
};
Cart.Ing = function CartListIng({ children, ...restProps }) {
  const ingredients = useSelector(({ ingredients }) => ingredients.items.ing)
  const { items } = useSelector(({ ingredients }) => ingredients)
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
    profile?.map((item) => (
      <Scale key = { item.id } {...restProps}>
        <Image src = { item.imageUrl } />
        <Size {...restProps}>
          { item.size || item.text }
        </Size>
      </Scale>
    ))
  )
};

Cart.Ingredient = function CartIngredients({ children, ...restProps }) {
  return <Ingredient {...restProps}>{children}</Ingredient>;
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

Cart.Hero = function CartHero({ children, ...restProps }) {
  return <Hero {...restProps}>{children}</Hero>;
};
Cart.Dough = function CartDough({ children, ...restProps }) {
  return <Dough {...restProps}>{children}</Dough>;
};
Cart.WrapperElement = function CartWrapperElement({ children, ...restProps }) {
  return <WrapperElement {...restProps}>{children}</WrapperElement>;
};

Cart.WrapperIng = function CartWrapperIng({ children, ...restProps }) {
  return <WrapperIng {...restProps}>{children}</WrapperIng>;
};