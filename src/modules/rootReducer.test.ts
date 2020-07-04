import rootReducer from './index';

test('초기 상태', () => {
  const state = rootReducer(undefined, { type: 'library/NOP' });
  expect(state).toEqual({
    library: {
      itemSummaries: [],
    },
  });
});
