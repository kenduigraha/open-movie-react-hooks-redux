import { initialState, omdbReducer } from './omdbReducer';

describe('OMDB reducer tests', () => {
  it('should load the initial state', () => {
    expect(omdbReducer(initialState, { type: '', payload: {} })).toEqual({
      ...initialState,
    });
  });
});
