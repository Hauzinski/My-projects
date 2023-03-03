import React from 'react';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithRedux, renderWithRouter } from '@/utils/helpers/testHelpers';

import Header from './Header';

describe('Layout test: Header', () => {
  it('default render component', () => {
    const { container, getByRole, getByLabelText, getByPlaceholderText } = render(
      renderWithRedux(renderWithRouter(<Header />))
    );

    expect(container.querySelector('.header')).toBeInTheDocument();
    expect(container.querySelector('.search-form')).toBeInTheDocument();
    expect(getByRole('searchbox')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter a request')).toBeInTheDocument();
    expect(getByRole('button')).toBeInTheDocument();
    expect(getByLabelText('Search options')).toBeInTheDocument();
    expect(container.querySelector('.sort-filters')).not.toBeInTheDocument();
    expect(container.querySelector('.video-order')).not.toBeInTheDocument();
    expect(container.querySelector('.video-per-page')).not.toBeInTheDocument();
  });

  it("click 'select options' button", async () => {
    const { container, getByText, queryByText } = render(renderWithRedux(renderWithRouter(<Header />)));
    const button = container.querySelector('.btn-sort-filters') as HTMLButtonElement;

    expect(queryByText(/Sorting by:/i)).toBeNull();
    expect(queryByText(/Video order:/i)).toBeNull();
    expect(queryByText(/Video per page:/i)).toBeNull();
    expect(container.querySelector('.sort-filters-hidden')).toBeInTheDocument();

    await userEvent.click(button);
    expect(getByText(/Sorting by:/i)).toBeInTheDocument();
    expect(getByText(/Video order:/i)).toBeInTheDocument();
    expect(getByText(/Video per page:/i)).toBeInTheDocument();
    expect(container.querySelector('.sort-filters-hidden')).not.toBeInTheDocument();

    await userEvent.click(button);
    expect(container.querySelector('.sort-filters-hidden')).toBeInTheDocument();
  });

  it('set request in search input', async () => {
    const { container, getByDisplayValue } = render(renderWithRedux(renderWithRouter(<Header />)));
    const input = container.querySelector('.search-input') as HTMLInputElement;
    await userEvent.type(input, 'React tests');
    expect(getByDisplayValue('React tests')).toBeInTheDocument();
  });
});
