import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('렌더링', () => {
  const { container } = render(<App />);
  expect(container).toBeInTheDocument();
});
