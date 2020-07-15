import React from 'react';
import styled from '@emotion/styled';

const FooterBlock = styled.footer`
  background-color: #121212;
  color: #868e96;
  font-size: 0.75rem;
  padding: 0 1rem;
  width: 100%;
  height: 55px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  p {
    margin: 0.1rem 0;
  }
`;

function Footer() {
  return (
    <FooterBlock>
      <p>© 2010-2020 SQUARE ENIX CO., LTD. All Rights Reserved</p>
      <p>Published in Korea by ACTOZ SOFT CO., LTD.</p>
    </FooterBlock>
  );
}

export default Footer;
