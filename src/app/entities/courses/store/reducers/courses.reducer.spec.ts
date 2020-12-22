import { coursesReducer, initialState } from '@app/entities/courses/store/reducers/courses.reducer';

describe('Courses Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = coursesReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
