import { getItemSummaries } from './api';

test('getItemSummaries', async () => {
  const expectData = [[10057, '롱기누스: 제타', '31887', 135, 4, 5, 50]];
  const { data } = await getItemSummaries();
  expect(data).toEqual(expectData);
});
