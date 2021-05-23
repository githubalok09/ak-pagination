
export function getList() {
    return fetch('https://jsonplaceholder.typicode.com/photos')
      .then(data => data.json())
  }