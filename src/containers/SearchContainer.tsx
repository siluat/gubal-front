import React from 'react';
import SearchInput from '../components/SearchInput/SearchInput';
import ReadyingMessage from '../components/ReadyingMessage';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';

type SearchContainerProps = {
  children: React.ReactNode;
};

function SearchContainer({ children }: SearchContainerProps) {
  const { readyToSearch } = useSelector((state: RootState) => state.library);

  if (!readyToSearch) {
    return <ReadyingMessage />;
  }

  return (
    <>
      <SearchInput />
      {children}
    </>
  );
}

export default SearchContainer;
