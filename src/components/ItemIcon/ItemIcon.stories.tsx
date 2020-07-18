import React from 'react';
import ItemIcon from './ItemIcon';

export default {
  component: ItemIcon,
  title: 'components/ItemIcon',
};

export const itemIcon = () => (
  <ItemIcon code="31887" size="small" itemName="롱기누스: 제타" />
);
itemIcon.story = {
  name: 'Default',
};

export const size = () => (
  <>
    <p>Small</p>
    <ItemIcon code="31887" size="small" itemName="롱기누스: 제타" />
    <p>medium</p>
    <ItemIcon code="31887" size="medium" itemName="롱기누스: 제타" />
  </>
);
