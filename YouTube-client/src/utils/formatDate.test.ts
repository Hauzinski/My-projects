import { formatDate } from './formatDate';

it('Util test: formatDate', () => {
  expect(formatDate('2021-05-06T17:57:18Z')).toBe('Thursday, May 6, 2021');
  expect(formatDate('2022-05-31T13:05:09Z')).toBe('Tuesday, May 31, 2022');
  expect(formatDate('2021-12-10T03:15:54Z')).toBe('Friday, December 10, 2021');
  expect(formatDate('2020-08-25T09:06:00Z')).toBe('Tuesday, August 25, 2020');
  expect(formatDate('2000-01-01T00:00:00Z')).toBe('Saturday, January 1, 2000');
});
