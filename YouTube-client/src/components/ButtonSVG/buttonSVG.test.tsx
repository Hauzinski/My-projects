import React from 'react';

import { render } from '@testing-library/react';

import ButtonSVGComponent from './ButtonSVG';

const data = {
  class: ['class-one', 'class-two'],
  action: () => {},
  label: 'button label',
  disabled: false,
};

it('Component test: ButtonSVG', () => {
  const { getByRole, getByLabelText } = render(<ButtonSVGComponent data={data} />);
  expect(getByRole('button')).toBeInTheDocument();
  expect(getByLabelText('button label')).toBeInTheDocument();
});
