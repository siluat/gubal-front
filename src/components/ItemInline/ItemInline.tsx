import React from 'react';
import styled from '@emotion/styled';
import { ItemSummary } from '../../modules/library';

const ItemInlineBlock = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 60px;
  .icon-column {
    padding: 10px;
    .icon {
      width: 40px;
      height: 40px;
    }
  }
`;

type ItemInlineProps = {
  item: ItemSummary;
};

function ItemInline({ item }: ItemInlineProps) {
  const { name } = item;
  return (
    <ItemInlineBlock>
      <div className="icon-column"></div>
      <div className="description-column">{name}</div>
      <div className="category-column"></div>
    </ItemInlineBlock>
  );
}

export default ItemInline;
