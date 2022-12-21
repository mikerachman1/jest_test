import capitalize from "./capitalize";

test ('returns first letter capitalized', () => {
  expect(capitalize('dog')).toMatch('D');
});