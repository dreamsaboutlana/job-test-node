const books = require('./books');

function fetchBooksByAuthors(name) {
  return [...books].filter(item => item.author == name);
}

console.log(fetchBooksByAuthors('Stephen Hunter'));