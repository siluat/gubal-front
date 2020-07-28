import React from 'react';
import ItemDetail from './ItemDetail';
import testItem from '../../mocks/data/testItem';

export default {
  component: ItemDetail,
  title: 'components/ItemDetail',
};

export const itemDetail = () => {
  return <ItemDetail item={testItem} />;
};
itemDetail.story = {
  name: 'ItemDetail',
};
