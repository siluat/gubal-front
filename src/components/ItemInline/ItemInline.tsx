import React from 'react';
import styled from '@emotion/styled';
import { ItemSummary } from '../../modules/library';
import { decodeItemCategory } from '../../utils/decoder';
import colors from '../../styles/colors';
import ItemIcon from '../ItemIcon/ItemIcon';

const ItemInlineBlock = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid gray;
  .icon-column {
    padding: 10px;
  }
  .description-column {
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .level {
      font-size: 0.75rem;
      margin: 0.05rem 0;
      dt,
      dd {
        display: inline-block;
      }
      dt {
        color: ${colors.highlight};
      }
      dd {
        width: 30px;
        margin: 0 0.5rem;
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

type ItemNameProps = {
  color?: string;
};

const ItemName = styled('p')`
  font-size: 0.9rem;
  font-weight: 600;
  margin: 0.1rem 0;
  color: ${(props: ItemNameProps) => props.color};
`;

type ItemInlineProps = {
  item: ItemSummary;
  style?: React.CSSProperties;
};

const baseUrl = 'https://gubal.s3.ap-northeast-2.amazonaws.com';

function ItemInline({ item, style }: ItemInlineProps) {
  const { name, icon, itemLevel, equipLevel, category, rarity } = item;
  const { name: categoryName, icon: categoryIcon } = decodeItemCategory(
    category,
  );
  const categoryIconUrl = `${baseUrl}${categoryIcon}`;
  return (
    <ItemInlineBlock style={style}>
      <div className="icon-column">
        <ItemIcon size="small" code={icon} itemName={name} />
      </div>
      <div className="description-column">
        <ItemName color={colors.rarity[rarity]}>{name}</ItemName>
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
