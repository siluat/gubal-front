import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import ItemDetail from './ItemDetail';
import { testItem, pugilistArm } from '../../mocks/data/testItems';
import { Item } from '../../types/Item';

export default {
  component: ItemDetail,
  title: 'components/ItemDetail',
  decorators: [withKnobs],
};

export const itemDetail = () => {
  const isUnique = boolean('고유 여부', true);
  const isUntradable = boolean('거래 불가 여부', true);
  const isCrestWorthy = boolean('문장 장식 가능 여부', false);
  const isGlamourous = boolean('환상의 옷장 보관 가능 여부', false);
  const isCollectable = boolean('추억의 보관함 보관 가능 여부', false);

  const item: Item = {
    ...testItem,
    isUnique,
    isUntradable,
    isCrestWorthy,
    isGlamourous,
    isCollectable,
  };

  return <ItemDetail item={item} />;
};
itemDetail.story = {
  name: 'Default',
};

export const 격투무기 = () => <ItemDetail item={pugilistArm} />;
