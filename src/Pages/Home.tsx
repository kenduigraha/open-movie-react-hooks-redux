// eslint-disable-next-line
import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

import Header from '../Components/Header';
import Movie, { IDataMovie } from '../Components/Movie';
import spinner from '../assets/ajax-loader.gif';
import Search from '../Components/Search';
import { initialState, omdbReducer } from '../store/reducer/omdbReducer';
import {
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILURE,
} from '../store/actions/constants';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;

// for default render API data
const MOVIE_API_URL = `${API_URL}?s=man&apikey=${API_KEY}`;

const App = () => {
  const [state, dispatch] = useReducer(omdbReducer, initialState);

  useEffect(() => {
    axios.get(MOVIE_API_URL).then((jsonResponse) => {
      dispatch({
        type: SEARCH_MOVIES_SUCCESS,
        payload: jsonResponse.data.Search,
      });
    });
  }, []);

  const search = (searchValue: string) => {
    dispatch({
      type: SEARCH_MOVIES_REQUEST,
    });

    axios(`${API_URL}?s=${searchValue}&apikey=${API_KEY}`).then(
      (jsonResponse) => {
        if (jsonResponse.data.Response === 'True') {
          dispatch({
            type: SEARCH_MOVIES_SUCCESS,
            payload: jsonResponse.data.Search,
          });
        } else {
          dispatch({
            type: SEARCH_MOVIES_FAILURE,
            error: jsonResponse.data.Error,
          });
        }
      },
    );
  };

  const { movies, errorMessage, loading } = state;

  const retrievedMovies = () => {
    if (loading && !errorMessage) {
      return <img className="spinner" src={spinner} alt="Loading spinner" />;
    }
    if (errorMessage) {
      return <div className="errorMessage">{errorMessage}</div>;
    }
    return movies.map((movie: IDataMovie, index: number) => (
      <Movie key={`${movie.imdbID}-${movie.Title}`} movie={movie} />
    ));
  };

  return (
    <div className="App">
      <div className="m-container">
        <Header text="Open Movie React Redux" />

        <Search search={search} />

        <p className="App-intro">search all movies you like</p>

        <div className="movies">{retrievedMovies()}</div>
      </div>
    </div>
  );
};

export default App;
