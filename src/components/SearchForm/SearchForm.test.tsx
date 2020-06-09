import React from 'react';
import { render } from '@testing-library/react';
import SearchForm from './SearchForm';

test('렌더링', () => {
  const { container, getByPlaceholderText } = render(<SearchForm />);
  expect(container).toBeInTheDocument();

  const inputElement = getByPlaceholderText('검색어를 입력하세요');
  expect(inputElement).toBeInTheDocument();
});
