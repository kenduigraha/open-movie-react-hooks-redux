import {
  SEARCH_MOVIE_DETAIL_REQUEST,
  SEARCH_MOVIE_DETAIL_SUCCESS,
  SEARCH_MOVIE_DETAIL_FAILURE,
} from '../actions/constants';

interface IRating {
  Source: string;
  Value: string;
}

export interface IDataDetailMovie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Array<IRating>;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

export interface InterfaceInitialState {
  loading: boolean;
  movie_detail: IDataDetailMovie;
  errorMessage: string | null;
}

export const initialState: InterfaceInitialState = {
  loading: true,
  movie_detail: {
    Title: 'Batman Begins',
    Year: '2005',
    Rated: 'PG-13',
    Released: '15 Jun 2005',
    Runtime: '140 min',
    Genre: 'Action, Adventure',
    Director: 'Christopher Nolan',
    Writer:
      'Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)',
    Actors: 'Christian Bale, Michael Caine, Liam Neeson, Katie Holmes',
    Plot:
      'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.',
    Language: 'English, Mandarin',
    Country: 'USA, UK',
    Awards: 'Nominated for 1 Oscar. Another 14 wins & 72 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    Ratings: [
      {
        Source: 'Internet Movie Database',
        Value: '8.2/10',
      },
      {
        Source: 'Rotten Tomatoes',
        Value: '84%',
      },
      {
        Source: 'Metacritic',
        Value: '70/100',
      },
    ],
    Metascore: '70',
    imdbRating: '8.2',
    imdbVotes: '1,283,912',
    imdbID: 'tt0372784',
    Type: 'movie',
    DVD: 'N/A',
    BoxOffice: 'N/A',
    Production: 'Warner Brothers, Di Bonaventura Pictures',
    Website: 'N/A',
    Response: 'True',
  },
  errorMessage: null,
};

// eslint-disable-next-line
export const omdbDetailReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SEARCH_MOVIE_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case SEARCH_MOVIE_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        movie_detail: action.payload,
      };
    case SEARCH_MOVIE_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};
