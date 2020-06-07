import React from 'react';
import { render } from '@testing-library/react';
import FullScreen from './FullScreen';

describe('FullScreen Layout', () => {
  test('전체화면으로 렌더링', () => {
    const { container } = render(<FullScreen>내용</FullScreen>);
    expect(container.firstChild).toHaveStyle('width: 100vw;');
    expect(container.firstChild).toHaveStyle('height: 100vh;');
  });

  test('children을 포함', () => {
    const { getByText } = render(<FullScreen>내용</FullScreen>);
    const contentElement = getByText(/내용/i);
    expect(contentElement).toBeInTheDocument();
  });
});
