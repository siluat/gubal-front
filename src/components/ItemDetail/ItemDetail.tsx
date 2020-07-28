import React from 'react';
import { Item } from '../../types/Item';
import styled from '@emotion/styled';
import ItemIcon from '../ItemIcon/ItemIcon';
import ItemName from '../ItemName/ItemName';

const ItemDetailBlock = styled.div`
  display: grid;
  grid-template:
    'icon base-information' 30px
    / 100px 1fr;

  padding-top: 1rem;

  .icon {
    grid-area: icon;
    font-size: 0;
    text-align: center;
  }

  .base-information {
    grid-area: base-information;
    font-size: 16px;
    display: flex;
  }
`;

export type ItemDetailProps = {
  item: Item;
};

function ItemDetail({ item }: ItemDetailProps) {
  const { icon, name, rarity, isUnique, isUntradable } = item;
  return (
    <ItemDetailBlock>
      <div className="icon">
        <ItemIcon code={`${icon}`} itemName={name} size="medium" />
      </div>
      <div className="base-information">
        {isUnique && '고유'}
        {isUntradable && '거래 불가'}
        <ItemName rarity={rarity}>{name}</ItemName>
      </div>
    </ItemDetailBlock>
  );
}

export default ItemDetail;
