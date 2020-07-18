import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { decodeIcon } from '../../utils/decoder';

export type ItemIconProps = {
  code: string;
  size: 'small' | 'medium';
  itemName: string;
};

const ItemIconImg = styled.img`
  &.small {
    width: 40px;
    height: 40px;
  }
  &.medium {
    width: 60px;
    height: 60px;
  }
`;

const baseUrl = 'https://gubal.s3.ap-northeast-2.amazonaws.com';

function ItemIcon({ code, size, itemName }: ItemIconProps) {
  const iconUrl = useMemo(() => `${baseUrl}${decodeIcon(code)}`, [code]);
  return (
    <ItemIconImg className={size} src={iconUrl} alt={`${itemName} 아이콘`} />
  );
}

export default ItemIcon;
