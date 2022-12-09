import * as redux from 'react-redux';

import { useCheckValueRequest } from './useCheckValueRequest';

jest.mock('react-redux');

test('Util test: useCheckValueRequest', () => {
  (redux.useSelector as jest.Mock).mockReturnValue('Search request');
  const checkValueRequest = useCheckValueRequest();

  expect(checkValueRequest('search request')).toBeTruthy();
  expect(checkValueRequest('SEARCH REQUEST')).toBeTruthy();
  expect(checkValueRequest('   search REQUEST ')).toBeTruthy();
  expect(checkValueRequest('request')).toBeFalsy();
  expect(checkValueRequest('search  request')).toBeFalsy();
  expect(checkValueRequest('')).toBeFalsy();
  expect(checkValueRequest('  ')).toBeFalsy();
});
