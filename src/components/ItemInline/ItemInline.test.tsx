import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemInline from './ItemInline';
import { ItemSummary } from '../../modules/library';

const testItemSummary: ItemSummary = {
  id: 10057,
  name: '롱기누스: 제타',
  icon: '31887',
  itemLevel: 135,
  rarity: 4,
  category: 5,
};

test('기본 렌더링', () => {
  const { name } = testItemSummary;
  render(<ItemInline item={testItemSummary} />);

  expect(screen.getByText(name)).toBeInTheDocument();
});
