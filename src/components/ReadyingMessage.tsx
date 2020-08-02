import React from 'react';
import styled from '@emotion/styled';
import JobIconMorph from './JobIconMorph/JobIconMorph';

const ReadyingMessageBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30vh;
  p {
    color: #bbac94;
  }
`;

function ReadyingMessage() {
  return (
    <ReadyingMessageBlock data-testid="readying-message">
      <JobIconMorph />
      <p>검색에 필요한 데이터를 준비 중</p>
    </ReadyingMessageBlock>
  );
}

export default ReadyingMessage;
