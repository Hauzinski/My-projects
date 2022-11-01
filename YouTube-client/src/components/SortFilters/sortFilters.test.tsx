import React from 'react';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithRedux } from '../../utils/helpers/testHelpers';
import SortFiltersComponent from './SortFilters';

describe('Component test: SortFilters', () => {
  it('default render component', () => {
    const { container, getByText, getByRole } = render(renderWithRedux(<SortFiltersComponent />));

    expect(container.querySelectorAll('.filter').length).toBe(4);
    expect(getByText('date')).toBeInTheDocument();
    expect(getByText('views')).toBeInTheDocument();
    expect(getByText('likes')).toBeInTheDocument();
    expect(getByText('comments')).toBeInTheDocument();
    expect(getByText('by word or sentence')).toBeInTheDocument();
    expect(getByRole('searchbox')).toBeInTheDocument();
    expect(container.querySelector('input')?.value).toEqual('');
  });

  it('set sort by word filter', async () => {
    const { container, getByRole } = render(renderWithRedux(<SortFiltersComponent />));
    const input = container.querySelector('input');

    expect(getByRole('searchbox')).toBeInTheDocument();
    expect(input?.value).toEqual('');

    await userEvent.type(getByRole('searchbox'), 'React');
    expect(input?.value).toEqual('React');
  });
});
