import calculator from "../calculator";

test('Sum', () => {
  expect(calculator.sum(1,2)).toBe(3);
});

test('Subtract', () => {
  expect(calculator.subtract(4,2)).toBe(2);
})

test('Divide', () => {
  expect(calculator.divide(15,3)).toBe(5);
})

test('Multiply', () => {
  expect(calculator.multiply(4,3)).toBe(12);
})

test('Invalid arguments', () => {
  expect(() => calculator.sum('A', 2)).toThrow();
})
