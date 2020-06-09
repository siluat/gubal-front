import React from 'react';
import SearchForm from './SearchForm';

export default {
  component: SearchForm,
  title: 'components/SearchForm',
};

export const searchForm = () => <SearchForm />;
searchForm.story = {
  name: 'default',
};
