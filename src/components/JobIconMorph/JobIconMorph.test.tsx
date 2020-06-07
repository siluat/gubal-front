import React from 'react';
import { render, wait, waitForDomChange } from '@testing-library/react';
import JobIconMorph from './JobIconMorph';

test('렌더링', async () => {
  const { container, getByText } = render(<JobIconMorph />);
  const svgElement = container.querySelector('svg');
  expect(svgElement).toBeInTheDocument();

  // SVG가 자동으로 변한다
  await waitForDomChange({ container });
  await wait(() => {
    getByText('전사');
  });
});
