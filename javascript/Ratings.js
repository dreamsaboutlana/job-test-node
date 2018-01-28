const books = require('./books');
const orderBooksFunc = require('./order-books-by-ratings');
const fetchBooksFunc = require('./fetch-books-by-authors');

const Ratings = (() => {
  let array = orderBooksFunc.orderBooksByRating(books);

  return {
    getTopBooks(n) {
      return array.filter((item, idx) => n > idx);
    },
    getTopAuthors(n) {
      let resultArray = [];
      array.forEach((item) => {

        let checkingAuthorName = item.author;
        let averageRatingAmount = 0;
        let averageDivider = 1;

        array.forEach((insideItem) => {
          if (item.author === insideItem.author) {
            averageRatingAmount += insideItem.ratings;
            averageDivider++;
          }
        });

        if (resultArray.length < n) {
          resultArray[checkingAuthorName] = averageRatingAmount / averageDivider;
        }
      });

      return resultArray;
    }
  }

})();
// console.log(Ratings.getTopBooks(2));
console.log(Ratings.getTopAuthors(3));