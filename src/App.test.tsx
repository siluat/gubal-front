import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import App, { AppRoute } from './App';

test('렌더링', () => {
  const { container } = render(<App />);
  expect(container).toBeInTheDocument();
});

test('route /search', async () => {
  const { getByTestId } = render(
    <MemoryRouter initialEntries={['/search']}>
      <AppRoute />
    </MemoryRouter>,
  );
  expect(getByTestId('search-page')).toBeInTheDocument();
});
