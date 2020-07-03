import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchInput from './SearchInput';

test('기본 렌더링', () => {
  render(<SearchInput />);

  const searchInput = screen.getByRole('textbox', { name: '검색어' });
  expect(searchInput).toBeInTheDocument();
});
