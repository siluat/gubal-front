import React from 'react';
import styled from '@emotion/styled';
import colors from '../../styles/colors';
import { Item } from '../../types/Item';
import BlockHeader from './BlockHeader';

const CraftingAndRepairBlock = styled.div`
  margin: 0.6rem;
  dl {
    margin: 0.6rem;
    font-size: 0.875rem;
    div {
      margin: 0;
      dt,
      dd {
        display: inline-block;
        margin: 0;
        width: 50%;
      }
      dt {
        color: ${colors.highlight};
      }
    }
    div + div {
      margin-top: 0.3rem;
    }
  }
`;

type CraftingAndRepairProps = {
  item: Item;
  className?: string;
};

function CraftingAndRepair({ item, className }: CraftingAndRepairProps) {
  const { repairClassJob, equipLevel, repairItem } = item;
  const repairLevel = Math.max(equipLevel - 10, 1);

  if (!repairClassJob) {
    return null;
  }

  return (
    <CraftingAndRepairBlock className={className}>
      <BlockHeader>제작 및 수리</BlockHeader>
      <dl>
        {repairClassJob && (
          <>
            <div>
              <dt>수리 레벨</dt>
              <dd>{`${repairClassJob} 레벨 ${repairLevel} 이상`}</dd>
            </div>
            <div>
              <dt>수리 재료</dt>
              <dd>{repairItem}</dd>
            </div>
          </>
        )}
      </dl>
    </CraftingAndRepairBlock>
  );
}

export default CraftingAndRepair;
