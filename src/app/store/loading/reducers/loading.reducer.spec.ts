import { initialState, loadingReducer } from '@app/store/loading/reducers/loading.reducer';

describe('Loading Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = loadingReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
