import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, wait } from './utils/test-utils';
import App, { AppRoute } from './App';

test('렌더링', async () => {
  render(<App />);

  await wait(() =>
    expect(screen.getByTestId('search-page')).toBeInTheDocument(),
  );
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
