import React from 'react';
import styled from '@emotion/styled';

const GuideForSearchBlock = styled.div`
  padding-top: 30vh;
  ul {
    list-style: none;
    padding-inline-start: 0;
  }
`;

function GuideForSearch() {
  return (
    <GuideForSearchBlock>
      <ul>
        <li>아이템 정보를 검색할 수 있습니다.</li>
      </ul>
    </GuideForSearchBlock>
  );
}

export default GuideForSearch;
