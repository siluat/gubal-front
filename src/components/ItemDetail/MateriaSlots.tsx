import React from 'react';
import { Item } from '../../types/Item';
import styled from '@emotion/styled';
import { times } from 'lodash';
import colors from '../../styles/colors';

const MateriaSlotsBlock = styled.div`
  margin: 0.6rem;
  .block-header {
    font-size: 0.75rem;
    margin: 0;
    padding-bottom: 0.2rem;
    color: ${colors.darkText};
    border-bottom: 1px solid #3d3d3d;
  }
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
      <h2 className="block-header">마테리아</h2>
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
