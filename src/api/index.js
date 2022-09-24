export const getPizzaData = (data) => {
  return fetch(
    `https://jsonplaceholder.typicode.com/users/${data}/posts`
  ).then((response) => response.json())
}
