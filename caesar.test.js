import caesar from "./caesar";

test('returns word with small shift', () => {
  expect(caesar('hello', 1)).toBe('ifmmp');
});

test('it works with spaces', () => {
  expect(caesar('aa b', 1)).toBe('bb c');
});

test('it wraps the alphabet', () => {
  expect(caesar('xyz', 3)).toBe('abc');
});

test('it works with negative shift', () => {
  expect(caesar('abc', -3)).toBe('xyz');
});

test('it maintains case', () => {
  expect(caesar('HelLo', 1)).toBe('IfmMp');
});

test('works with punctuation, spaces, capitalization, multiple words, and wrapping', () => {
  expect(caesar('%HelLo WorlD!', 5)).toBe('%MjqQt BtwqI!');
});