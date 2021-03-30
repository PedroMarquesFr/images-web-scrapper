const axios = require("axios");

async function searchByQuery(movie) {
  return axios
    .get(`http://www.omdbapi.com/?s=${movie}&apikey=${process.env.MOVIE_KEY}`)
    .then((r) => {
      console.log(r);
      return r.data;
    });
}

async function filmDetails(id) {
  return axios
    .get(`https://www.omdbapi.com/?i=${id}&apikey=${process.env.MOVIE_KEY}`)
    .then((r) => r.data)
    .catch((deupau) => deupau);
}


module.exports = {searchByQuery, filmDetails}