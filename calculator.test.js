import { add, subtract, divide, multiply } from './calculator';

test('adds two numbers', () => {
  expect(add(1, 1)).toBe(2);
});

test('subtracts second number from first', () => {
  expect(subtract(2, 1)).toBe(1);
});

test('divides first number by second number', () => {
  expect(divide(4, 2)).toBe(2);
});

test('multiplies 2 numbers', () => {
  expect(multiply(2, 2)).toBe(4);
});
