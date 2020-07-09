import React from 'react';
import { render, screen } from '../utils/test-utils';
import Search from './Search';

describe('Search Page', () => {
  test('기본 렌더링', () => {
    render(<Search />);

    const searchInput = screen.getByRole('textbox', { name: '검색어' });
    expect(searchInput).toBeInTheDocument();

    const readyToSearch = screen.getByTestId('ready-to-search');
    expect(readyToSearch).toBeInTheDocument();
  });
});
