import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import ItemName from './ItemName';
import { ItemRarity } from '../../types/ItemRairity';

export default {
  component: ItemName,
  title: 'components/ItemName',
  decorators: [withKnobs],
};

export const itemName = () => {
  const options: ItemRarity[] = [0, 1, 2, 3, 4, 5, 6, 7];
  const value: ItemRarity = select<ItemRarity>('rarity', options, 0);
  return <ItemName rarity={value}>롱고미안트</ItemName>;
};
itemName.story = {
  name: 'Default',
};
