import React from 'react';

import { render } from '@testing-library/react';

import LoadingSpinnerPage from './LoadingSpinnerPage';

it('Page test: LoadingSpinner', () => {
  const { container } = render(<LoadingSpinnerPage />);
  expect(container.querySelectorAll('main').length).toBe(1);
  expect(container.querySelectorAll('.loader').length).toBe(1);
  expect(container.querySelectorAll('div').length).toBe(1);
});
