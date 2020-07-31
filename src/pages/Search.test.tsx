import React from 'react';
import { render, screen, waitFor } from '../utils/test-utils';
import Search from './Search';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import rootReducer, { rootSaga } from '../modules';
import { getItemSummariesAsync } from '../modules/library';

const setupStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
};

describe('Search Page', () => {
  test('기본 렌더링', async () => {
    const store = setupStore();

    render(<Search />, { store });

    expect(screen.getByTestId('ready-to-search')).toBeInTheDocument();

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
