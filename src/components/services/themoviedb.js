const API_KEY = "1aa8711cbc657df22e20fcddf5cbba67";
const BASE_URL = `https://api.themoviedb.org/3`;

export const getTrending = () => {
  return fetch(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const getByQuery = (query) => {
  return fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const getMovieInfo = (movie_id) => {
  return fetch(`${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const getCast = (movie_id) => {
  return fetch(`${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const getReviews = (movie_id) => {
  return fetch(`${BASE_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

