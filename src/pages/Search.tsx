import React, { useCallback } from 'react';
import SearchInput from '../components/SearchInput/SearchInput';
import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import JobIconMorph from '../components/JobIconMorph/JobIconMorph';
import { searchItem } from '../modules/library';
import ItemInline from '../components/ItemInline/ItemInline';

const SearchPageBlock = styled.div`
  display: flex;
  flex-direction: column;
  .main-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
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
  const { readyToSearch, searchResults } = useSelector(
    (state: RootState) => state.library,
  );

  const dispatch = useDispatch();

  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const searchKeyword = e.currentTarget.value.trim();
      dispatch(searchItem(searchKeyword));
    },
    [dispatch],
  );

  return (
    <SearchPageBlock data-testid="search-page">
      <SearchInput onChange={onInputChange} />
      <section className="main-content">
        {readyToSearch ? (
          searchResults.length === 0 ? (
            <GuideForSearch />
          ) : (
            searchResults.map(result => (
              <ItemInline item={result} key={result.id} />
            ))
          )
        ) : (
          <ReadyToSearch />
        )}
      </section>
    </SearchPageBlock>
  );
}

export default Search;
