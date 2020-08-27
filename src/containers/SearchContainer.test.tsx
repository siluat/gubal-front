import React from 'react';
import { render, screen, setupStore } from '../utils/test-utils';
import SearchContainer from './SearchContainer';
import { getItemSummariesAsync } from '../modules/library';

describe('SearchContainer', () => {
  test('데이터 로드 이전에는 데이터 로드 상태임을 표시', () => {
    const store = setupStore();
    render(<SearchContainer>내용</SearchContainer>, { store });
    expect(
      screen.getByText(/검색에 필요한 데이터를 준비 중/),
    ).toBeInTheDocument();
  });

  test('데이터 로드 후에는 내용과 검색어 입력 폼을 표시', () => {
    const store = setupStore();
    store.dispatch(getItemSummariesAsync.success([]));
    render(<SearchContainer>내용</SearchContainer>, { store });
    expect(screen.getByText(/내용/)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/검색어를 입력하세요/),
    ).toBeInTheDocument();
  });
});
