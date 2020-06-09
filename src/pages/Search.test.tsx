import React from 'react';
import { render } from '@testing-library/react';
import Search from './Search';

test('렌더링', () => {
  const { container } = render(<Search />);
  expect(container).toBeInTheDocument();
});
