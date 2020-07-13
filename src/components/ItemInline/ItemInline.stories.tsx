import React from 'react';
import ItemInline from './ItemInline';
import { ItemSummary } from '../../modules/library';

export default {
  component: ItemInline,
  title: 'components/ItemInline',
};

const testItemSummaries: ItemSummary[] = [
  {
    id: 1874,
    name: '미완성 게 볼그',
    icon: '31843',
    itemLevel: 50,
    rarity: 1,
    category: 5,
    equipLevel: 50,
  },
  {
    id: 9494,
    name: '롱기누스',
    icon: '31887',
    itemLevel: 125,
    rarity: 4,
    category: 5,
    equipLevel: 50,
  },
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

export const itemInline = () => <ItemInline item={testItemSummaries[0]} />;
itemInline.story = {
  name: 'Default',
};

export const itemInlineList = () =>
  testItemSummaries.map(i => <ItemInline item={i} />);
itemInlineList.story = {
  name: 'List',
};
