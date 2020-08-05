import React from 'react';
import { Item } from '../../types/Item';
import styled from '@emotion/styled';

const StorageInformationBlock = styled.div`
  img {
    width: 16px;
    height: 16px;
  }
`;

type StorageInformationProps = {
  item: Item;
};

function StorageInformation({ item }: StorageInformationProps) {
  const { isCrestWorthy, isGlamourous, isCollectable } = item;
  return (
    <StorageInformationBlock>
      {isCrestWorthy ? (
        <img
          src="/images/crest_worthy.png"
          alt="문장 장식 가능"
          title="문장 장식 가능"
        />
      ) : (
        <img
          src="/images/not_crest_worthy.png"
          alt="문장 장식 불가"
          title="문장 장식 불가"
        />
      )}
      {isGlamourous ? (
        <img
          src="/images/glamourous.png"
          alt="환상의 옷장 보관 가능"
          title="환상의 옷장 보관 가능"
        />
      ) : (
        <img
          src="/images/not_glamourous.png"
          alt="환상의 옷장 보관 불가"
          title="환상의 옷장 보관 불가"
        />
      )}
      {isCollectable ? (
        <img
          src="/images/collectable.png"
          alt="추억의 보관함 보관 가능"
          title="추억의 보관함 보관 가능"
        />
      ) : (
        <img
          src="/images/not_collectable.png"
          alt="추억의 보관함 보관 불가"
          title="추억의 보관함 보관 불가"
        />
      )}
    </StorageInformationBlock>
  );
}

export default StorageInformation;
