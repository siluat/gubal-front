import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemInline from './ItemInline';
import { ItemSummary } from '../../modules/library';

const testItem: ItemSummary = {
  id: 10057,
  name: '롱기누스: 제타',
  icon: '31887',
  itemLevel: 135,
  rarity: 4,
  category: 5,
  equipLevel: 50,
};

const equippableItem: ItemSummary = {
  id: 10057,
  name: '롱기누스: 제타',
  icon: '31887',
  itemLevel: 135,
  rarity: 4,
  category: 5,
  equipLevel: 50,
};

const notEquippableItem: ItemSummary = {
  id: 4551,
  name: '포션',
  icon: '20601',
  itemLevel: 10,
  rarity: 1,
  category: 44,
  equipLevel: 1,
};

describe('ItemInline', () => {
  test('기본 렌더링', () => {
    const { name } = testItem;
    render(<ItemInline item={testItem} />);

    expect(screen.getByText(name)).toBeInTheDocument();
  });

  test('장비 가능 아이템일 경우 아이템 레벨과 장비 레벨 표시', () => {
    render(<ItemInline item={equippableItem} />);

    expect(screen.getByText('착용 레벨')).toBeInTheDocument();
  });

  test('장비 불가 아이템일 경우 아이템 레벨과 장비 레벨 미표시', () => {
    render(<ItemInline item={notEquippableItem} />);

    expect(screen.queryByText('착용 레벨')).not.toBeInTheDocument();
  });
});
