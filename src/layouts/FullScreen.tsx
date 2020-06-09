import React from 'react';
import styled from '@emotion/styled';

const FullScreenBlock = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export interface FullScreenProps {
  children?: React.ReactNode;
}

function FullScreen({ children }: FullScreenProps) {
  return <FullScreenBlock>{children}</FullScreenBlock>;
}

export default FullScreen;
