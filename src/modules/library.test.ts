import { getItemSummariesAsync, searchItem } from './library';
import rootReducer, { rootSaga } from '.';
import { waitFor } from '@testing-library/react';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { rest } from 'msw';
import { server } from '../mocks/server';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

describe('library 액션 테스트', () => {
  test('GET_ITEM_SUMMARIES 액션 성공', async () => {
    const expectLibrary = {
      readyToSearch: true,
      itemSummaries: [
        {
          id: 10057,
          name: '롱기누스: 제타',
          icon: '31887',
          itemLevel: 135,
          rarity: 4,
          category: 5,
          equipLevel: 50,
        },
      ],
      searchResults: [],
      error: null,
    };
    store.dispatch(getItemSummariesAsync.request());
    await waitFor(() => {
      const { library } = store.getState();
      expect(library).toEqual(expectLibrary);
    });
  });

  test('GET_ITEM_SUMMARIES 액션 실패', async () => {
    server.use(
      rest.get('/data/ItemSummaries.json', (_req, res, ctx) => {
        return res(
          ctx.status(404),
          ctx.json({
            errorMessage: `not found`,
          }),
        );
      }),
    );
    store.dispatch(getItemSummariesAsync.request());
    await waitFor(() => {
      const { library } = store.getState();
      const { readyToSearch, error } = library;
      expect(readyToSearch).toBeFalsy();
      expect(error).not.toBeNull();
    });
  });

  test('SEARCH_ITEM 액션', async () => {
    store.dispatch(getItemSummariesAsync.request());
    await waitFor(() => {
      expect(store.getState().library.itemSummaries).toEqual([
        {
          id: 10057,
          name: '롱기누스: 제타',
          icon: '31887',
          itemLevel: 135,
          rarity: 4,
          category: 5,
          equipLevel: 50,
        },
      ]);
    });
    store.dispatch(searchItem('롱기누스'));
    await waitFor(() => {
      expect(store.getState().library.searchResults).toEqual([
        {
          id: 10057,
          name: '롱기누스: 제타',
          icon: '31887',
          itemLevel: 135,
          rarity: 4,
          category: 5,
          equipLevel: 50,
        },
      ]);
    });
    store.dispatch(searchItem(''));
    await waitFor(() => {
      expect(store.getState().library.searchResults).toEqual([]);
    });
  });
});
