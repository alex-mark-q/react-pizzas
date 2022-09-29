import axios from 'axios';

export const getPizzaData = async (pathname) => {
  try {
    return fetch(
      `http://localhost:3004/${pathname}/`
    ).then((response) => response.json()).then(item => item)
  } catch(error) {
    console.log(error);
  }
}