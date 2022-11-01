import React from 'react';

import { render } from '@testing-library/react';

import AppLogoComponent from './AppLogo';

it('Component test: AppLogo', () => {
  const { container } = render(<AppLogoComponent />);
  expect(container.querySelectorAll('.logo').length).toBe(1);
  expect(container.querySelectorAll('div').length).toBe(2);
});
