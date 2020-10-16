// eslint-disable-next-line
import React, { useReducer, useEffect } from 'react';
import { Breadcrumb, Row, Col } from 'antd';
import axios from 'axios';

import Header from '../Components/Header';
import DetailMovieComponent from '../Components/DetailMovieComponent';
import spinner from '../assets/ajax-loader.gif';
import {
  initialState,
  omdbDetailReducer,
} from '../store/reducer/omdbDetailReducer';
import {
  SEARCH_MOVIE_DETAIL_REQUEST,
  SEARCH_MOVIE_DETAIL_SUCCESS,
  SEARCH_MOVIE_DETAIL_FAILURE,
} from '../store/actions/constants';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;

// for default render API data
const MOVIE_API_URL = `${API_URL}?apikey=${API_KEY}`;

// eslint-disable-next-line
const DetailMovie = (props: any) => {
  const [state, dispatch] = useReducer(omdbDetailReducer, initialState);
  const {
    match: {
      params: { id },
    },
  } = props;

  useEffect(() => {
    dispatch({
      type: SEARCH_MOVIE_DETAIL_REQUEST,
    });

    axios.get(`${MOVIE_API_URL}&i=${id}`).then((jsonResponse) => {
      if (jsonResponse.data.Response === 'True') {
        dispatch({
          type: SEARCH_MOVIE_DETAIL_SUCCESS,
          payload: jsonResponse.data,
        });
      } else {
        dispatch({
          type: SEARCH_MOVIE_DETAIL_FAILURE,
          error: jsonResponse.data.Error,
        });
      }
    });
  }, [id]);

  const { movie_detail: movieDetail, errorMessage, loading } = state;

  const retrievedDetailMovie = () => {
    if (loading && !errorMessage) {
      return <img className="spinner" src={spinner} alt="Loading spinner" />;
    }
    if (errorMessage) {
      return <div className="errorMessage">{errorMessage}</div>;
    }

    return <DetailMovieComponent movie_detail={movieDetail} />;
  };

  return (
    <div className="App">
      <div className="m-container">
        <Header text="Movie Detail" />

        <Row>
          <Col span={24}>
            <Breadcrumb>
              <Breadcrumb.Item>
                <a href="/">List Movies Page</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>{movieDetail.Title}</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>

        <div className="movie--detail">{retrievedDetailMovie()}</div>
      </div>
    </div>
  );
};

export default DetailMovie;
