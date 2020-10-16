import { SEARCH_MOVIES_REQUEST } from './constants';
import { getMovies, IParamsListMovies } from '../../Services/omdb';
import { InterfaceInitialState } from '../reducer/omdbReducer';

const receiveMovies = (movies: InterfaceInitialState) => {
  return {
    type: SEARCH_MOVIES_REQUEST,
    movies,
  };
};

// eslint-disable-next-line
const fetchMovies = (search: IParamsListMovies) => (dispatch: any) => {
  // eslint-disable-next-line
  return getMovies(search).then((json: any) => dispatch(receiveMovies(json)));
};

export { fetchMovies };
