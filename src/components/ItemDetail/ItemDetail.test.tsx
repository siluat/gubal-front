import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemDetail from './ItemDetail';
import { testItem } from './ItemDetail.stories';

describe('ItemDetail', () => {
  test('기본 렌더링', () => {
    render(<ItemDetail item={testItem} />);

    const altTextForItemIcon = `${testItem.name} 아이콘`;
    const itemIcon = screen.getByAltText(altTextForItemIcon);
    expect(itemIcon).toBeInTheDocument();

    const name = screen.getByText(testItem.name);
    expect(name).toBeInTheDocument();
  });
});
