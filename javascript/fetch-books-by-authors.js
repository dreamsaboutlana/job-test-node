module.exports = {
  fetchBooksByAuthors (data, name) {
    return data.filter(item => item.author === name)
  }
};