import reverseString from "./reverseString";

test('returns string reversed', () => {
  expect(reverseString('dog')).toBe('god');
});

test('works with capitalization', () => {
  expect(reverseString('DoG')).toBe('GoD');
});

test('works with sentence', () => {
  expect(reverseString('hello world')).toBe('dlrow olleh');
});