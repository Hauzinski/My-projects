import { formatLowerCamelCaseToCase } from './formatLowerCamelCaseToCase';

describe('Util test: formatLowerCamelCaseToCase', () => {
  it('lower camel case value', () => {
    expect(formatLowerCamelCaseToCase('videoCount')).toBe('video count');
    expect(formatLowerCamelCaseToCase('viewCount')).toBe('view count');
  });

  it('empty value', () => {
    expect(formatLowerCamelCaseToCase('')).toBe('');
    expect(formatLowerCamelCaseToCase(' ')).toBe('  ');
  });

  it('not a lower camel case value', () => {
    expect(formatLowerCamelCaseToCase('camel case')).toBe('camel  case');
    expect(formatLowerCamelCaseToCase('camelcase')).toBe('camelcase');
  });

  it('long lower camel case value', () => {
    expect(formatLowerCamelCaseToCase('longLowerCamelCaseValue')).toBe('long lower camel case value');
  });

  it('camel case value', () => {
    expect(formatLowerCamelCaseToCase('CamelCase')).toBe(' camel case');
  });
});
