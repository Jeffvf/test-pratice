import { capitalize } from "./capitalize";

test('First test', () =>
  {
    expect(capitalize('test')).toBe('Test');
  }
);

test('Test phrase', () => {
  expect(capitalize('this is an apple')).toBe('This is an apple');
});