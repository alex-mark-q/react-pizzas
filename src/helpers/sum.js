const filter = (obj) => {
  const [...item] = [...Object.values(obj)]
  return item.filter(i => i !== item[item.length - 1]);
}
export const getTotalSum = (obj, value) => {
  const filterIngridients = filter(obj)

  // const actions = {
  //   filter: function(obj) {
  //     return filter(obj)
  //   },
  //   getItems: function () {
  //   }
  // };

  // return actions;
  // console.log('filterIngridients ', filterIngridients)
  const Ingridients = [...Object.keys(filterIngridients).map((key) => {
    return filterIngridients[key].items[0]
  })]
  // console.log('Ingridients ', Ingridients)
  return [...Ingridients].reduce((sum, obj) => {
    // console.log('sum',sum, obj, obj?.[value])
    return parseFloat(sum + obj?.[value]);
  }, 0);

};