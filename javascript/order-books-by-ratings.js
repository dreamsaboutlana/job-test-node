const books = require('./books');

const orderBooksByRating = data => {
  return [...data].sort(function (a, b) {
    return (a.ratings > b.ratings) ? 1 : ((b.ratings > a.ratings) ? -1 : 0);
  });
};

