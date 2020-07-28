import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import ItemDetail from './ItemDetail';
import { testItem } from '../../mocks/data/testItems';
import { Item } from '../../types/Item';

export default {
  component: ItemDetail,
  title: 'components/ItemDetail',
  decorators: [withKnobs],
};

export const itemDetail = () => {
  const isUnique = boolean('고유 여부', true);
  const isUntradable = boolean('거래 불가 여부', true);
  const item: Item = {
    ...testItem,
    isUnique: isUnique,
    isUntradable: isUntradable,
  };

  return <ItemDetail item={item} />;
};

itemDetail.story = {
  name: 'Default',
};
