import React from 'react';
import { Item } from '../../types/Item';
import styled from '@emotion/styled';
import { times } from 'lodash';
import BlockHeader from './BlockHeader';

const MateriaSlotsBlock = styled.div`
  margin: 0.6rem;
  .slot-icons {
    padding: 0.6rem;
  }
`;

type MateriaSlotsProps = {
  item: Item;
  className?: string;
};

function MateriaSlots({ item, className }: MateriaSlotsProps) {
  const { materiaSlotCount } = item;

  if (materiaSlotCount < 1) {
    return null;
  }

  return (
    <MateriaSlotsBlock className={className}>
      <BlockHeader>마테리아</BlockHeader>
      <div className="slot-icons">
        {times(materiaSlotCount, number => (
          <img
            key={number}
            src="/images/materia_slot.png"
            width="24px"
            height="24px"
            alt="마테리아 슬롯"
          />
        ))}
      </div>
    </MateriaSlotsBlock>
  );
}

export default MateriaSlots;
