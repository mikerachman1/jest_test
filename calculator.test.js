import calculator from "./calculator";

test('it adds two nums', () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test('it subtracts two nums', () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});

test('it multiplies two nums', () => {
  expect(calculator.multiply(2,3)).toBe(6);
});

test('it divides two nums', () => {
  expect(calculator.divide(20,2)).toBe(10);
});