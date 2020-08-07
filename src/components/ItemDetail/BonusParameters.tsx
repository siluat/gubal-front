import React from 'react';
import { Item } from '../../types/Item';
import styled from '@emotion/styled';
import colors from '../../styles/colors';
import { BaseParam } from '../../types/BaseParam';

const BonusParametersBlock = styled.div`
  margin: 0.6rem;
  .block-header {
    font-size: 0.75rem;
    margin: 0;
    padding-bottom: 0.2rem;
    color: ${colors.darkText};
    border-bottom: 1px solid #3d3d3d;
  }
  dl {
    margin: 0.6rem;
    display: grid;
    grid-template-areas: 'a a';
    grid-row-gap: 0.35rem;
    div {
      display: flex;
      dt,
      dd {
        display: inline-block;
        font-size: 0.875rem;
      }
      dt {
        color: ${colors.highlight};
      }
      dd {
        margin-left: 0.2rem;
      }
    }
  }
`;

type BonusParametersProps = {
  item: Item;
  className?: string;
};

function BonusParameters({ item, className }: BonusParametersProps) {
  const {
    baseParam0,
    baseParam1,
    baseParam2,
    baseParam3,
    baseParam4,
    baseParam5,
  } = item;

  const baseParams: BaseParam[] = [];

  baseParam0 && baseParams.push(baseParam0);
  baseParam1 && baseParams.push(baseParam1);
  baseParam2 && baseParams.push(baseParam2);
  baseParam3 && baseParams.push(baseParam3);
  baseParam4 && baseParams.push(baseParam4);
  baseParam5 && baseParams.push(baseParam5);

  if (!baseParams.length) {
    return null;
  }

  return (
    <BonusParametersBlock className={className}>
      <h2 className="block-header">추가 능력치</h2>
      <dl>
        {baseParams.map(({ name, value }) => (
          <div key={name}>
            <dt>{name}</dt>
            <dd>+{value}</dd>
          </div>
        ))}
      </dl>
    </BonusParametersBlock>
  );
}

export default BonusParameters;
