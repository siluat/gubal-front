import React from 'react';
import SearchInput from '../components/SearchInput/SearchInput';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import JobIconMorph from '../components/JobIconMorph/JobIconMorph';

const SearchPageBlock = styled.div`
  display: flex;
  flex-direction: column;
  .main-content {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ReadyToSearchBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30vh;
  p {
    color: #bbac94;
  }
`;

const GuideForSearchBlock = styled.div`
  padding-top: 30vh;
  ul {
    list-style: none;
    padding-inline-start: 0;
  }
`;

function ReadyToSearch() {
  return (
    <ReadyToSearchBlock data-testid="ready-to-search">
      <JobIconMorph />
      <p>검색에 필요한 데이터를 준비 중</p>
    </ReadyToSearchBlock>
  );
}

function GuideForSearch() {
  return (
    <GuideForSearchBlock>
      <ul>
        <li>아이템 정보를 검색할 수 있습니다.</li>
      </ul>
    </GuideForSearchBlock>
  );
}

function Search() {
  const { readyToSearch } = useSelector((state: RootState) => state.library);
  return (
    <SearchPageBlock data-testid="search-page">
      <SearchInput />
      <section className="main-content">
        {readyToSearch ? <GuideForSearch /> : <ReadyToSearch />}
      </section>
    </SearchPageBlock>
  );
}

export default Search;
