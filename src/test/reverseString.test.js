import reverseString from "../reverseString";

test('Reverse word', () => {
  expect(reverseString('this')).toBe('siht');
})

test('Reverse phrase', () => {
  expect(reverseString('Try to reverse this')).toBe('siht esrever ot yrT');
})