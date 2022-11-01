import React from 'react';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithRedux } from '../../../utils/helpers/testHelpers';
import FilterComponent from './Filter';

const data = {
  type: 'byDate',
  title: 'date',
  label: 'Sorting by date',
};

describe('Component test: Filter', () => {
  it('filter should be off', () => {
    const { container, getByText } = render(renderWithRedux(<FilterComponent data={data} />));

    expect(container.querySelector('.filter')).toBeInTheDocument();
    expect(getByText('date')).toBeInTheDocument();
  });

  it('filter click', async () => {
    const { container, getByRole } = render(renderWithRedux(<FilterComponent data={data} />));
    const button = getByRole('button');

    expect(container.querySelector('.filter-arrow')).toBeInTheDocument();
    expect(container.querySelector('.arrow-hide')).toBeInTheDocument();
    expect(container.querySelector('.arrow-down')).not.toBeInTheDocument();

    await userEvent.click(button);
    expect(container.querySelector('.arrow-hide')).not.toBeInTheDocument();
    expect(container.querySelector('.arrow-down')).toBeInTheDocument();

    await userEvent.click(button);
    expect(container.querySelector('.arrow-hide')).not.toBeInTheDocument();
    expect(container.querySelector('.arrow-down')).not.toBeInTheDocument();

    await userEvent.click(button);
    expect(container.querySelector('.filter-arrow')).toBeInTheDocument();
    expect(container.querySelector('.arrow-hide')).toBeInTheDocument();
    expect(container.querySelector('.arrow-down')).not.toBeInTheDocument();
  });
});
