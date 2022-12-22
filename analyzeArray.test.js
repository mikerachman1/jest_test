import analyzeArray from "./analyzeArray";

const object = analyzeArray([1,8,3,4,2,6]);

test('it returns an object', () => {
  expect(typeof object).toStrictEqual('object');
});

test('it returns average', () => {
  expect(object.average).toBe(4);
});

test('it finds the length', () => {
  expect(object.length).toBe(6);
});

test('it finds the min', () => {
  expect(object.min).toBe(1);
});

test('it finds the max', () => {
  expect(object.max).toBe(8);
});