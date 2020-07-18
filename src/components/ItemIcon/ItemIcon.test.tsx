import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemIcon from './ItemIcon';

describe('ItemIcon', () => {
  test('small size', () => {
    render(<ItemIcon code="31887" size="small" itemName="롱기누스: 제타" />);
    const iconImage = screen.getByAltText(/롱기누스: 제타 아이콘/);
    expect(iconImage).toBeInTheDocument();
    expect(iconImage).toHaveClass('small');
    expect(iconImage).toHaveStyle('width: 40px; height: 40px;');
  });

  test('medium size', () => {
    render(<ItemIcon code="31887" size="medium" itemName="롱기누스: 제타" />);
    const iconImage = screen.getByAltText(/롱기누스: 제타 아이콘/);
    expect(iconImage).toBeInTheDocument();
    expect(iconImage).toHaveClass('medium');
    expect(iconImage).toHaveStyle('width: 60px; height: 60px;');
  });
});
