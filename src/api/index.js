import axios from 'axios';

export const getAllPizzaData = () => {
  // axios.get(`
  //   /${pathname}
  // `).then((response) => response.json())
  return fetch(
    `http://localhost:3001/data/`
    // `/pizzas`
  ).then((response) => response.json())
}
