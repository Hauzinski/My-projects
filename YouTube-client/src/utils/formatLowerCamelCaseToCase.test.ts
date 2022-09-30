import { expect, test, describe } from '@jest/globals';

import formatLowerCamelCaseToCase from './formatLowerCamelCaseToCase';

describe('Util test: formatLowerCamelCaseToCase', () => {
  test('lower camel case value', () => {
    expect(formatLowerCamelCaseToCase('videoCount')).toBe('video count');
    expect(formatLowerCamelCaseToCase('viewCount')).toBe('view count');
  });

  test('empty value', () => {
    expect(formatLowerCamelCaseToCase('')).toBe('');
    expect(formatLowerCamelCaseToCase(' ')).toBe('  ');
  });

  test('not a lower camel case value', () => {
    expect(formatLowerCamelCaseToCase('camel case')).toBe('camel  case');
    expect(formatLowerCamelCaseToCase('camelcase')).toBe('camelcase');
  });

  test('long lower camel case value', () => {
    expect(formatLowerCamelCaseToCase('longLowerCamelCaseValue')).toBe('long lower camel case value');
  });

  test('camel case value', () => {
    expect(formatLowerCamelCaseToCase('CamelCase')).toBe(' camel case');
  });
});
