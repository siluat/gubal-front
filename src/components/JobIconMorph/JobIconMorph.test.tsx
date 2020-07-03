import React from 'react';
import { render, screen, wait } from '@testing-library/react';
import JobIconMorph from './JobIconMorph';

test('기본 렌더링', async () => {
  render(<JobIconMorph />);

  const firstTitle = screen.getByTestId('job-title').innerHTML;
  await wait(() => {
    expect(screen.queryByText(firstTitle)).not.toBeInTheDocument();
    expect(screen.getByTestId('job-title')).toBeInTheDocument();
  });

  const secondTitle = screen.getByTestId('job-title').innerHTML;
  await wait(() => {
    expect(screen.getByText(secondTitle)).toBeInTheDocument();
    expect(screen.getByTestId('job-title')).toBeInTheDocument();
  });
});
