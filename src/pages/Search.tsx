import React, { useCallback, useEffect, useState } from 'react';
import SearchInput from '../components/SearchInput/SearchInput';
import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';
import { useTransition, animated } from 'react-spring';
import { RootState } from '../modules';
import { keywordChanged } from '../modules/library';
import SearchResult from '../components/SearchResult/SearchResult';
import Footer from '../components/Footer/Footer';
import InitializationMessage from '../components/InitializationMessage';
import GuideForSearch from '../components/GuideForSearch';
import { useParams, useHistory } from 'react-router-dom';
import useDebounce from '../hooks/useDebounce';

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

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  min-width: 320px;
`;

function Search() {
  const history = useHistory();
  const { searchKeyword } = useParams<{ searchKeyword: string }>();
  const [nextSearchKeyword, setNextSearchKeyword] = useState<string>();
  const debouncedNextSearchKeyword = useDebounce(nextSearchKeyword, 200);

  const { readyToSearch, searchResults } = useSelector(
    (state: RootState) => state.library,
  );

  const dispatch = useDispatch();

  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const nextKeyword = e.currentTarget.value.trim();
      setNextSearchKeyword(nextKeyword);
    },
    [],
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

  useEffect(() => {
    dispatch(keywordChanged(searchKeyword));
  }, [searchKeyword, dispatch, readyToSearch]);

  useEffect(() => {
    if (debouncedNextSearchKeyword && debouncedNextSearchKeyword.length > 0) {
      history.push(`/search/${debouncedNextSearchKeyword}`);
    }
  }, [debouncedNextSearchKeyword, history]);

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
        {!readyToSearch && <InitializationMessage />}
        {readyToSearch && searchResults.length === 0 && <GuideForSearch />}
        {readyToSearch && searchResults.length !== 0 && (
          <SearchResult items={searchResults} />
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
