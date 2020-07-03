import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, wait } from '@testing-library/react';
import App, { AppRoute } from './App';

test('렌더링', () => {
  const { container } = render(<App />);
  expect(container).toBeInTheDocument();
});

test('route /search', async () => {
  render(
    <MemoryRouter initialEntries={['/search']}>
      <AppRoute />
    </MemoryRouter>,
  );

  await wait(() =>
    expect(screen.getByTestId('search-page')).toBeInTheDocument(),
  );
});
