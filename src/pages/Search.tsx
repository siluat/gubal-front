import React, { useCallback } from 'react';
import SearchInput from '../components/SearchInput/SearchInput';
import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';
import { useTransition, animated } from 'react-spring';
import { RootState } from '../modules';
import JobIconMorph from '../components/JobIconMorph/JobIconMorph';
import { keywordChanged } from '../modules/library';
import SearchResult from '../components/SearchResult/SearchResult';
import Footer from '../components/Footer/Footer';

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

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  min-width: 320px;
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
      dispatch(keywordChanged(searchKeyword));
    },
    [dispatch],
  );

  const searchInputTransition = useTransition(readyToSearch, null, {
    from: {
      transform: `translateY(-100px)`,
      opacity: 0,
    },
    enter: {
      transform: `translateY(0px)`,
      opacity: 1,
    },
    leave: {
      transform: `translateY(-100px)`,
      opacity: 0,
    },
  });

  return (
    <SearchPageBlock data-testid="search-page">
      {searchInputTransition.map(({ item, key, props }) =>
        item ? (
          <animated.div key={key} style={props}>
            <SearchInput onChange={onInputChange} />
          </animated.div>
        ) : null,
      )}
      <section className="main-content">
        {readyToSearch ? (
          searchResults.length === 0 ? (
            <GuideForSearch />
          ) : (
            <SearchResult items={searchResults} />
          )
        ) : (
          <ReadyToSearch />
        )}
      </section>
      {searchResults.length === 0 && (
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      )}
    </SearchPageBlock>
  );
}

export default Search;
