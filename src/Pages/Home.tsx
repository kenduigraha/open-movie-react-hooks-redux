// eslint-disable-next-line
import React, { useReducer, useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../Components/Header';
// import Movie, { IDataMovie } from '../Components/Movie';
import ListMovies from '../Components/ListMovies';
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
const DEFAULT_SEARCH_VALUE = 'iron man';
const DEFAULT_FIRST_PAGE = 1;

// for default render API data
const MOVIE_API_URL = `${API_URL}?apikey=${API_KEY}`;

const App = () => {
  const [currPage, setCurrPage] = useState(DEFAULT_FIRST_PAGE);
  const [currSearchValue, setCurrSearchValue] = useState(DEFAULT_SEARCH_VALUE);
  const [state, dispatch] = useReducer(omdbReducer, initialState);

  useEffect(() => {
    axios
      .get(
        `${MOVIE_API_URL}&s=${DEFAULT_SEARCH_VALUE}&page=${DEFAULT_FIRST_PAGE}`,
      )
      .then((jsonResponse) => {
        dispatch({
          type: SEARCH_MOVIES_SUCCESS,
          payload: jsonResponse.data.Search,
        });
      });
  }, []);

  const search = (searchValue: string, pageSearched: number) => {
    dispatch({
      type: SEARCH_MOVIES_REQUEST,
    });

    axios(
      `${API_URL}?s=${searchValue}&apikey=${API_KEY}&page=${pageSearched}`,
    ).then((jsonResponse) => {
      if (jsonResponse.data.Response === 'True') {
        setCurrSearchValue(searchValue);

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
    });
  };

  const handleInfinityUpdate = () => {
    const nextPage = currPage + 1;
    setCurrPage(nextPage);

    // hit API again for next page
    search(currSearchValue, nextPage);
  };

  const { movies, errorMessage, loading } = state;

  const retrievedMovies = () => {
    if (loading && !errorMessage && movies.length === 1) {
      return <img className="spinner" src={spinner} alt="Loading spinner" />;
    }
    if (errorMessage) {
      return <div className="errorMessage">{errorMessage}</div>;
    }

    return (
      <ListMovies movies={movies} handleInfinityUpdate={handleInfinityUpdate} />
    );
  };

  return (
    <div className="App">
      <div className="m-container">
        <Header text="Open Movie React Redux" />

        <Search search={search} currPage={currPage} />

        <p className="App-intro">search all movies you like</p>

        <div className="movies">{retrievedMovies()}</div>
      </div>
    </div>
  );
};

export default App;
