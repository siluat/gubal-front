import React from 'react';
import ItemInline from './ItemInline';
import { ItemSummary } from '../../modules/library';

export default {
  component: ItemInline,
  title: 'components/ItemInline',
};

const testItemSummary: ItemSummary = {
  id: 10057,
  name: '롱기누스: 제타',
  icon: '31887',
  itemLevel: 135,
  rarity: 4,
  category: 5,
};

export const itemInline = () => <ItemInline item={testItemSummary} />;
itemInline.story = {
  name: 'Default',
};
