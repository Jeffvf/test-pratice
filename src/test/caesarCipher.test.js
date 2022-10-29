import caesarCipher from "../caesarCipher";

test('Simple low case string', () => {
  expect(caesarCipher('abc')).toBe('bcd');
});

test('Low case spaced string', () => {
  expect(caesarCipher('a b c')).toBe('b c d');
});

test('Low case string with punctuation', () => {
  expect(caesarCipher('a.b c')).toBe('b.c d');
});

test('Upper case string', () => {
  expect(caesarCipher('ABC')).toBe('BCD');
})

test('Z to A', () => {
  expect(caesarCipher('z')).toBe('a');
})
