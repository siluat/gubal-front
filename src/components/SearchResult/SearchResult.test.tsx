import React from 'react';
import { render, screen, wait } from '../../utils/test-utils';
import SearchResult from './SearchResult';
import { ItemSummary } from '../../modules/library';

const testItems: ItemSummary[] = [
  {
    id: 10057,
    name: '롱기누스: 제타',
    icon: '31887',
    itemLevel: 135,
    rarity: 4,
    category: 5,
    equipLevel: 50,
  },
];

describe('SearchResult', () => {
  test('아이템 출력', () => {
    render(<SearchResult items={testItems} />);
    expect(screen.getByText('롱기누스: 제타')).toBeInTheDocument();
  });
});
