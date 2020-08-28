import React from 'react';
import SearchInput from '../components/SearchInput/SearchInput';
import InitializationMessage from '../components/InitializationMessage';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';

type SearchContainerProps = {
  children: React.ReactNode;
};

function SearchContainer({ children }: SearchContainerProps) {
  const { readyToSearch } = useSelector((state: RootState) => state.library);

  if (!readyToSearch) {
    return <InitializationMessage />;
  }

  return (
    <>
      <SearchInput />
      {children}
    </>
  );
}

export default SearchContainer;
