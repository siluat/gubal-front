import React from 'react';
import { render, screen, wait } from '../utils/test-utils';
import userEvent from '@testing-library/user-event';
import Search from './Search';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import rootReducer, { rootSaga } from '../modules';
import { getItemSummariesAsync } from '../modules/library';

describe('Search Page', () => {
  test('기본 렌더링', () => {
    render(<Search />);

    const searchInput = screen.getByRole('textbox', { name: '검색어' });
    expect(searchInput).toBeInTheDocument();

    const readyToSearch = screen.getByTestId('ready-to-search');
    expect(readyToSearch).toBeInTheDocument();
  });

  test('검색어 입력시 SEARCH_ITEM 액션 발생', async () => {
    const sagaMiddleware = createSagaMiddleware();
    const testStore = createStore(rootReducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
    testStore.dispatch(
      getItemSummariesAsync.success([
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

    render(<Search />, { store: testStore });
    await wait(() => {
      expect(screen.queryByTestId('ready-to-search')).not.toBeInTheDocument();
    });

    const searchInput = screen.getByRole('textbox', { name: '검색어' });
    userEvent.type(searchInput, '롱기누스');

    await wait(() => {
      expect(screen.getByText(/롱기누스: 제타/i)).toBeInTheDocument();
    });
  });
});
