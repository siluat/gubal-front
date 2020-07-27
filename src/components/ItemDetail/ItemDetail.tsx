import React from 'react';
import { Item } from '../../types/Item';
import styled from '@emotion/styled';
import ItemIcon from '../ItemIcon/ItemIcon';

const ItemDetailBlock = styled.div`
  display: grid;
  grid-template:
    'icon base-information' 30px
    / 100px 1fr;

  .icon {
    grid-area: icon;
    font-size: 0;
    text-align: center;
    padding-top: 1rem;
  }

  .base-information {
    grid-area: base-information;
    font-size: 16px;
    display: flex;
    align-items: center;
  }
`;

export type ItemDetailProps = {
  item: Item;
};

function ItemDetail({ item }: ItemDetailProps) {
  const { icon, name } = item;
  return (
    <ItemDetailBlock>
      <div className="icon">
        <ItemIcon code={`${icon}`} itemName={name} size="medium" />
      </div>
      <div className="base-information">{name}</div>
    </ItemDetailBlock>
  );
}

export default ItemDetail;
