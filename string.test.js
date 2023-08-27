import { capitalize } from './string';

test('capitalize will return a capitalized string', () => {
  expect(capitalize('string')).toBe('String');
});

test('capitalize will return a capitalized string', () => {
  expect(capitalize('foo')).toBe('Foo');
});

test('capitalize will return the same string if already capitalized', () => {
  expect(capitalize('Foo')).toBe('Foo');
});

test('capitalize will return the same string if first string is a number', () => {
  expect(capitalize('1foo')).toBe('1foo');
});
