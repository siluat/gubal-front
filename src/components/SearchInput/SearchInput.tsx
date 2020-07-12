import React from 'react';
import styled from '@emotion/styled';
import Icon from '../Icon/Icon';

type SearchInputProps = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function SearchInput({ onChange }: SearchInputProps) {
  return (
    <SearchInputBlock>
      <Icon type="find" color={placeholderColor} />
      <StyledInput
        aria-label="검색어"
        placeholder="검색어를 입력하세요"
        type="text"
        onChange={onChange}
      />
    </SearchInputBlock>
  );
}

const placeholderColor = '#adb5bd';

const SearchInputBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
  background-color: white;
  padding-left: 0.7rem;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  padding: 1rem 1rem 0.9rem 0.7rem;
  font-size: 1.1rem;
  flex-grow: 1;
  ::placeholder {
    color: ${placeholderColor};
  }
`;

export default SearchInput;
