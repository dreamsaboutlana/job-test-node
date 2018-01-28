const books = require('./books');

const sortBooksAlphabeticallyPromise = (books) => {
  let sortedBooks;

  // some logic for sorting here
  sortedBooks = books;

  return new Promise((resolve, reject) => {
    resolve(sortedBooks);
  })
};

const filterBooksWithTitleStartingWithAPromise = (books) => {
  let filteredBooks;

  // some logic for filtering
  filteredBooks = books.filter((item) => item.ratings > 3);

  return new Promise((resolve, reject) => {
    resolve(filteredBooks);
  })
};

const getBooksAsyncPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(books)
    }, 2000);
  })
};

getBooksAsyncPromise()
  .then((books) => {
    return sortBooksAlphabeticallyPromise(books);
  })
  .then((sorted) => {
    return filterBooksWithTitleStartingWithAPromise(sorted)
  })
  .then(console.log);














