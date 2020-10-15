import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export interface IParamsListMovies {
  movieTitle: string;
  page: number;
}

function getMovies(data: IParamsListMovies) {
  const { movieTitle, page } = data;
  const API_URL = `${apiUrl}?s=${movieTitle}&r=json&apikey=${apiKey}&page=${page}`;

  return axios.get(API_URL);
}

export { getMovies };
