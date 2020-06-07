import React from 'react';
import FullScreen from './layouts/FullScreen';
import JobIconMorph from './components/JobIconMorph/JobIconMorph';
import styled from '@emotion/styled';

const Text = styled.span`
  font-size: 1rem;
  color: #bbac94;
  line-height: 3rem;
`;

function App() {
  return (
    <FullScreen>
      <JobIconMorph color="#bbac94" />
      <Text>서비스 오픈 준비 중</Text>
    </FullScreen>
  );
}

export default App;
