import { formatVideoMetrics } from './formatVideoMetrics';

describe('Util it: formatVideoMetrics', () => {
  it('not a number value', () => {
    expect(formatVideoMetrics('notanumber')).toBe('-');
  });

  it('zero value', () => {
    expect(formatVideoMetrics('0')).toBe('0');
  });

  it('value less than a thousand', () => {
    expect(formatVideoMetrics('3')).toBe('3');
    expect(formatVideoMetrics('87')).toBe('87');
    expect(formatVideoMetrics('425')).toBe('425');
  });

  it('value greater than a thousand and less than a million', () => {
    expect(formatVideoMetrics('1000')).toBe('1.0 K');
    expect(formatVideoMetrics('4525')).toBe('4.5 K');
    expect(formatVideoMetrics('66789')).toBe('66.8 K');
    expect(formatVideoMetrics('734248')).toBe('734.2 K');
  });

  it('value greater than a million and less than a billion', () => {
    expect(formatVideoMetrics('1000000')).toBe('1.0 M');
    expect(formatVideoMetrics('4561230')).toBe('4.6 M');
    expect(formatVideoMetrics('34556123')).toBe('34.6 M');
    expect(formatVideoMetrics('729667278')).toBe('729.7 M');
  });

  it('value greater a billion', () => {
    expect(formatVideoMetrics('1000000000')).toBe('1.0 B');
    expect(formatVideoMetrics('34578901236')).toBe('34.6 B');
    expect(formatVideoMetrics('134578901236')).toBe('134.6 B');
    expect(formatVideoMetrics('765223765432')).toBe('765.2 B');
    expect(formatVideoMetrics('4765223765432')).toBe('4765.2 B');
  });
});
