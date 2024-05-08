import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const options = {
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWU2NDllMjM3NjZjMzgxOWQxOTUzYmFjN2MzZGRmZCIsInN1YiI6IjY2MzJhOTU4NjY1NjVhMDEyODEzNjVmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7klu0JTfj-efLqCNSdzVcSSUcqMA2ke2U_jRgKGsfbQ`,
    Accept: 'application/json',
  },
  params: {
    language: 'en-US',
  },
};

export const getTrending = async () => {
  // const { data } = await axios.get(`trending/all/day`, options);
  const { data } = await axios.get(`trending/movie/day`, options);

  return data;
};

export const searchMovies = async (
  query
  // releaseYear = '',
  // page = 1,
  // region = '',
  // year = ''
) => {
  const { data } = await axios.get(
    // `search/movie?query=${query}&include_adult=false&language=en-US&primary_release_year=${releaseYear}&page=${page}&region=${region}&year=${year}`,
    `search/movie?query=${query}&language=en-US`,
    options
  );

  return data;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios.get(`movie/${movieId}`, options);

  return data;
};

export const getMovieCredits = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/credits`, options);

  return data;
};

export const getMovieReviews = async (
  movieId,
  language = 'en-US',
  page = 1
) => {
  const { data } = await axios.get(
    `movie/${movieId}/reviews?language=${language}&page=${page}`,
    options
  );

  return data;
};
