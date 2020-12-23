import { authorsReducer, initialState } from './authors.reducer';

describe('Authors Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = authorsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
