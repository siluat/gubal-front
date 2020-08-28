import React from 'react';
import styled from '@emotion/styled';
import JobIconMorph from './JobIconMorph/JobIconMorph';

const InitializationMessageBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30vh;
  p {
    color: #bbac94;
  }
`;

function InitializationMessage() {
  return (
    <InitializationMessageBlock>
      <JobIconMorph />
      <p>검색에 필요한 데이터를 준비 중</p>
    </InitializationMessageBlock>
  );
}

export default InitializationMessage;
