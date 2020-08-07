import React from 'react';
import styled from '@emotion/styled';
import colors from '../../styles/colors';

const StyledH2 = styled.h2`
  font-size: 0.75rem;
  margin: 0;
  padding-bottom: 0.2rem;
  color: ${colors.darkText};
  border-bottom: 1px solid #3d3d3d;
`;

type BlockHeaderProps = {
  children: React.ReactNode;
};

function BlockHeader({ children }: BlockHeaderProps) {
  return <StyledH2>{children}</StyledH2>;
}

export default BlockHeader;
