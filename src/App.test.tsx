import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/구브라 환상도서관/i);
  expect(linkElement).toBeInTheDocument();
});
