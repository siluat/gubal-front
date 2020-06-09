import React from 'react';
import styled from '@emotion/styled';
import Icon from '../Icon/Icon';

function SearchForm() {
  return (
    <StyledForm>
      <Icon type="find" />
      <StyledInput aria-label="검색어" placeholder="검색어를 입력하세요" />
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  padding: 1rem;
  font-size: 1.1rem;
`;

export default SearchForm;
