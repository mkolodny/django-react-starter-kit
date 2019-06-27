import reducer, { initialState } from './exampleReducer';

describe('exampleReducer', () => {
  test('initial state', () => {
    const action = {type: ''};

    expect(reducer(undefined, action)).toEqual(initialState);
  });
});
