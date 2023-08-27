import { analyzeArray } from './analyze-array';

const array = [1, 2, 3, 4, 5, 6, 7];
const expectedResult = {
  average: 4,
  min: 1,
  max: 7,
  length: 7,
};

test('returns an object with the correct values', () => {
  expect(analyzeArray(array)).toEqual(expectedResult);
});
