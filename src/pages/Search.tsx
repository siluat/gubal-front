import React from 'react';
import SearchInput from '../components/SearchInput/SearchInput';
import styled from '@emotion/styled';

const SearchPageBlock = styled.div``;

function Search() {
  return (
    <SearchPageBlock data-testid="search-page">
      <SearchInput />
    </SearchPageBlock>
  );
}

export default Search;
