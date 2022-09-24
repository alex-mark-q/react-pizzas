import axios from 'axios';

export const getPizzaData = (pathname) => {
  // axios.get(`
  //   /${pathname}
  // `).then((response) => response.json())
  return fetch(
    `http://localhost:3001/${pathname}`
    // `/pizzas`
  ).then((response) => response.json())
}
