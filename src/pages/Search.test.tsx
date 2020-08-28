import React from 'react';
import { render, screen, waitFor, setupStore } from '../utils/test-utils';
import Search from './Search';
import { getItemSummariesAsync } from '../modules/library';
import { MemoryRouter } from 'react-router-dom';

describe('Search Page', () => {
  test('기본 렌더링', async () => {
    const store = setupStore();

    render(
      <MemoryRouter initialEntries={['/search']}>
        <Search />
      </MemoryRouter>,
      { store },
    );

    expect(screen.getByText(/검색에 필요한 데이터를 준비 중/)).toBeInTheDocument();

    store.dispatch(
      getItemSummariesAsync.success([
        {
          id: 1874,
          name: '미완성 게 볼그',
          icon: '31843',
          itemLevel: 50,
          rarity: 1,
          category: 5,
          equipLevel: 50,
        },
        {
          id: 10057,
          name: '롱기누스: 제타',
          icon: '31887',
          itemLevel: 135,
          rarity: 4,
          category: 5,
          equipLevel: 50,
        },
      ]),
    );

    await waitFor(() => {
      expect(
        screen.getByRole('textbox', { name: '검색어' }),
      ).toBeInTheDocument();
    });
  });
});
