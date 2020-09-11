export function getData() {
   return fetch('https://www.breakingbadapi.com/api/characters')
  .then(response => response.json())
}
