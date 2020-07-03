import React from 'react';
import SearchInput from './SearchInput';

export default {
  component: SearchInput,
  title: 'components/SearchInput',
};

export const searchInput = () => <SearchInput />;
searchInput.story = {
  name: 'default',
};
