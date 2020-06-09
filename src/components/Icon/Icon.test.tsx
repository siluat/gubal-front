import React from 'react';
import { render } from '@testing-library/react';
import Icon from './Icon';

describe('Icon', () => {
  test('기본 값으로 렌더링', () => {
    const { container } = render(<Icon type="find" />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('fill', 'black');
    expect(svgElement).toHaveAttribute('width', '24px');
  });

  test('지정된 속성에 따라 렌더링', () => {
    const { container } = render(
      <Icon type="find" color="#9c36b5" size="50px" className="test" />,
    );
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('fill', '#9c36b5');
    expect(svgElement).toHaveAttribute('width', '50px');
    expect(svgElement).toHaveClass('test');
  });
});
