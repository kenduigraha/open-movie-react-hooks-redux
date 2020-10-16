import { AxiosResponse } from 'axios';

const axiosResponse: AxiosResponse = {
  data: {
    Search: [
      {
        Title: 'Batman Begins',
        Year: '2005',
        imdbID: 'tt0372784',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
      },
    ],
  },
  status: 200,
  statusText: 'OK',
  config: {},
  headers: {},
};

export default {
  default: {
    get: jest.fn().mockImplementation(() => Promise.resolve(axiosResponse)),
  },
  get: jest.fn(() => Promise.resolve(axiosResponse)),
};
