import callbackTimer from './callbackTimer';

jest.useFakeTimers();

it('Util test: callbackTimer', () => {
  const mockCallback = jest.fn((value) => value);
  callbackTimer(mockCallback, 'test value');

  jest.runAllTimers();

  expect(mockCallback).toBeCalled();
  expect(mockCallback).toHaveBeenCalledTimes(1);
  expect(mockCallback.mock.results[0].value).toBe('test value');
});
