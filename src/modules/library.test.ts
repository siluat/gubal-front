import { getItemSummariesAsync } from './library';
import rootReducer, { rootSaga } from '.';
import { wait } from '@testing-library/react';
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
      itemSummaries: [
        {
          id: 1,
          name: '길',
          icon: '65002',
          itemLevel: 1,
          rarity: 1,
          category: 63,
        },
      ],
      error: null,
    };
    store.dispatch(getItemSummariesAsync.request());
    await wait(() => {
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
    await wait(() => {
      const { library } = store.getState();
      const { error } = library;
      expect(error).not.toBeNull();
    });
  });
});
