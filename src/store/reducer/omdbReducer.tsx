import {
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILURE,
} from '../actions/constants';

interface IDataMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface InterfaceInitialState {
  loading: boolean;
  movies: Array<IDataMovie>;
  errorMessage: string | null;
}

export const initialState: InterfaceInitialState = {
  loading: true,
  movies: [
    {
      Title: '',
      Year: '',
      imdbID: '',
      Type: '',
      Poster: '',
    },
  ],
  errorMessage: null,
};

// eslint-disable-next-line
export const omdbReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SEARCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies:
          state.movies.length === 1
            ? action.payload
            : state.movies.concat(action.payload),
      };
    case SEARCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};
