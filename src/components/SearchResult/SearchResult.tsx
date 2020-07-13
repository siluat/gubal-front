import React from 'react';
import { ItemSummary } from '../../modules/library';
import ItemInline from '../ItemInline/ItemInline';

type SearchResultProps = {
  items: ItemSummary[];
};

function SearchResult({ items }: SearchResultProps) {
  return (
    <>
      {items.map(item => (
        <ItemInline item={item} key={item.id} />
      ))}
    </>
  );
}

export default SearchResult;
