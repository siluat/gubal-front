import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { ItemSummary } from '../../modules/library';
import { decodeIcon, decodeItemCategory } from '../../utils/decoder';

const ItemInlineBlock = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 60px;
  border-bottom: 1px solid gray;
  .icon-column {
    padding: 10px;
    .icon {
      width: 40px;
      height: 40px;
    }
  }
  .description-column {
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .name {
      font-size: 0.9rem;
      margin: 0.1rem 0;
    }
    .level {
      font-size: 0.7rem;
      display: flex;
      margin: 0.1rem 0;
      dd {
        margin: 0 1rem;
      }
    }
  }
  .category-column {
    width: 50px;
    min-width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

type ItemInlineProps = {
  item: ItemSummary;
};

const baseUrl = 'https://gubal.s3.ap-northeast-2.amazonaws.com';

function ItemInline({ item }: ItemInlineProps) {
  const { name, icon, itemLevel, equipLevel, category } = item;
  const iconUrl = useMemo(() => `${baseUrl}${decodeIcon(icon)}`, [icon]);
  const { name: categoryName, icon: categoryIcon } = decodeItemCategory(
    category,
  );
  const categoryIconUrl = `${baseUrl}${categoryIcon}`;
  return (
    <ItemInlineBlock>
      <div className="icon-column">
        <img className="icon" src={iconUrl} alt={`${name} 아이콘`} />
      </div>
      <div className="description-column">
        <p className="name">{name}</p>
        <dl className="level">
          <dt>착용 레벨</dt>
          <dd>{equipLevel}</dd>
          <dt>아이템 레벨</dt>
          <dd>{itemLevel}</dd>
        </dl>
      </div>
      <div className="category-column">
        <img src={categoryIconUrl} alt={categoryName} />
      </div>
    </ItemInlineBlock>
  );
}

export default ItemInline;
