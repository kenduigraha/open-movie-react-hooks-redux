// eslint-disable-next-line
import React from 'react';
import PopOverTitle from './PopOverTitle';
import ModalMovie from './ModalMovie';

export interface IDataMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface IPropsMovie {
  movie: IDataMovie;
  isDetailPage: boolean;
}

const Movie = ({ movie, isDetailPage }: IPropsMovie) => {
  return (
    <div className="movie">
      {!isDetailPage && (
        <PopOverTitle movie={movie}>
          <h2>{movie.Title}</h2>
        </PopOverTitle>
      )}

      <ModalMovie movie={movie} />

      <p>({movie.Year})</p>
    </div>
  );
};

export default Movie;
