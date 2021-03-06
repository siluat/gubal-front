import React, { useCallback } from 'react';
import { AutoSizer, List } from 'react-virtualized';
import { ItemSummary } from '../../modules/library';
import ItemInline from '../ItemInline/ItemInline';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import colors from '../../styles/colors';

const SearchResultBlock = styled.div`
  flex-grow: 1;
  width: 100%;
  height: calc(100vh - 51.39px);
  .ReactVirtualized__List {
    outline: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.text};
`;

type SearchResultProps = {
  items: ItemSummary[];
};

function SearchResult({ items }: SearchResultProps) {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const item = items[index];
      const link = `/item/${item.id}`;
      return (
        <StyledLink to={link} key={key} style={style}>
          <ItemInline item={item} />
        </StyledLink>
      );
    },
    [items],
  );

  return (
    <SearchResultBlock data-testid="search-result">
      <AutoSizer>
        {({ width, height }) => (
          <List
            className="resultList"
            width={width || 375}
            height={height || 812}
            rowCount={items.length}
            rowHeight={60}
            rowRenderer={rowRenderer}
          />
        )}
      </AutoSizer>
    </SearchResultBlock>
  );
}

export default SearchResult;
