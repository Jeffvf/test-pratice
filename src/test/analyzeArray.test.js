import analyzeArray from "../analyzeArray";

test('Simple array', () => {
  expect(analyzeArray([1,2,3])).toStrictEqual({average: 2, min: 1, max: 3, length: 3});
});

test('Array with letters', () => {
  expect(() => analyzeArray(['a', 2, 3])).toThrow();
})