import { capitalize, reverseString, encipher } from './string';

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

test('reverseString returns the string reversed', () => {
  expect(reverseString('string')).toBe('gnirts');
});

test('reverseString returns the string reversed', () => {
  expect(reverseString('foo')).toBe('oof');
});

test('reverseString works with numbers', () => {
  expect(reverseString('foo1')).toBe('1oof');
});

test('encipher shifts the chars in the string by 1', () => {
  expect(encipher('foo', 1)).toBe('gpp');
});

test('encipher keeps case', () => {
  expect(encipher('Foo', 2)).toBe('Hqq');
});

test('encipher does not shift punctuation', () => {
  expect(encipher('foo!', 1)).toBe('gpp!');
});

test('encipher wraps correctly', () => {
  expect(encipher('foo', 27)).toBe('gpp');
});
